# frozen_string_literal: true

Fabricator(:follow_recommendation_mute) do
  account
  target_account(fabricator: :account)
end
