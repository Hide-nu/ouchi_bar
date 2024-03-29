require 'rails_helper'

RSpec.describe 'Commands::RegisterUser', type: :request do
  describe 'POST /commands/register_user' do
    it 'responds successfully returns a 200 response' do
      post commands_register_user_path
      expect(response).to be_successful
      expect(JSON.parse(response.body)['user']).not_to eq nil
    end
  end
end
