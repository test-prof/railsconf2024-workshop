# frozen_string_literal: true

Fabricator(:featured_tag) do
  account
  tag { nil }
  name { sequence(:name) { |i| "Tag#{i}" } }
end
