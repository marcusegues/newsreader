Rails.application.config.middleware.use OmniAuth::Builder do
  provider :facebook, '1691421964447573', '39e1ab776f6d7f199b793b8453c58dad'

end

# OmniAuth.config.logger = Rails.logger
#
# Rails.application.config.middleware.use OmniAuth::Builder do
#   provider :facebook, 1708956192723376, 'd236427b525c1218437babf8d0575103'
# end
