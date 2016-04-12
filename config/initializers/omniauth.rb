Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, ENV['1708956192723376'], ENV['d236427b525c1218437babf8d0575103'],
           :display => 'popup'
end

# OmniAuth.config.logger = Rails.logger
#
# Rails.application.config.middleware.use OmniAuth::Builder do
#   provider :facebook, 1708956192723376, 'd236427b525c1218437babf8d0575103'
# end
