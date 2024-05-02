# frozen_string_literal: true

Fabricator(:report_note) do
  report
  account
  content 'Test Content'
end
