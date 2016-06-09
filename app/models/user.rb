class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :username, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true}

  attr_reader :password

  after_initialize :ensure_session_token

  has_many :user_feed_sources,
    class_name: 'UserFeedSource',
    foreign_key: :user_id,
    primary_key: :id

  has_many :feed_sources,
    through: :user_feed_sources,
    source: :feed_source

  has_many :feeds,
    through: :feed_sources,
    source: :feeds

  has_many :authentications,
    class_name: 'Authentication',
    foreign_key: :user_id,
    primary_key: :id

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end
end
