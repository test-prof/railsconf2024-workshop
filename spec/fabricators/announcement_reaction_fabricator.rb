# frozen_string_literal: true

Fabricator(:announcement_reaction) do
  account
  announcement
  name { Fabricate(:custom_emoji).shortcode }
end
