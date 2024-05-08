RSpec.shared_context "shared:account" do
  let_it_be(:account) { Fabricate(:account) }
end

RSpec.shared_context "shared:user" do
  let_it_be(:user) { Fabricate(:user) }
end

RSpec.configure do |config|
  config.include_context "shared:account", account: true
  config.include_context "shared:user", user: true
end
