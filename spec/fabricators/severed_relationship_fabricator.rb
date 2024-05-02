# frozen_string_literal: true

Fabricator(:severed_relationship) do
  local_account(fabricator: :account)
  remote_account(fabricator: :account)
  relationship_severance_event
  direction { :active }
end
