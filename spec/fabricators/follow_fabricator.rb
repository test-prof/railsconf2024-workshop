# frozen_string_literal: true

Fabricator(:follow) do
  account
  target_account(fabricator: :account)
end
