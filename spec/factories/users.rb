FactoryBot.define do
  factory :user do
    name { Facker::Name.name_with_middle }
    email {Facker::Internet.email }
    contact_number {Facker::PhoneNumber.cell_phone_with_country_code }
    state { 'MP' }
    city  { 'Indore' }
  end
end
