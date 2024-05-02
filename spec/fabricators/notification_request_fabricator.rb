# frozen_string_literal: true

Fabricator(:notification_request) do
  account
  from_account(fabricator: :account)
  last_status(fabricator: :status)
  dismissed false
end
