# frozen_string_literal: true

Fabricator(:block) do
  account
  target_account(fabricator: :account)
end
