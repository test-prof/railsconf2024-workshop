# frozen_string_literal: true

Fabricator(:action_log, from: Admin::ActionLog) do
  account
  action  'MyString'
  target  nil
end
