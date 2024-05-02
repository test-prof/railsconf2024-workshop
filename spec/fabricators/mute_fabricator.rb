# frozen_string_literal: true

Fabricator(:mute) do
  account
  target_account(fabricator: :account)
end
