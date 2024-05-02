# frozen_string_literal: true

Fabricator(:report) do
  account
  target_account(fabricator: :account)
  comment         'You nasty'
  action_taken_at nil
end
