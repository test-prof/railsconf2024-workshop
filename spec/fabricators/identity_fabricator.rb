# frozen_string_literal: true

Fabricator(:identity) do
  user
  provider 'MyString'
  uid { sequence(:uid) { |i| "uid_string_#{i}" } }
end
