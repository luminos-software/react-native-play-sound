require 'json'
pjson = JSON.parse(File.read('package.json'))

Pod::Spec.new do |s|

  s.name            = pjson["name"]
  s.version         = pjson["version"]
  s.homepage        = "https://github.com/luminos-software/react-native-play-sound"
  s.summary         = pjson["description"]
  s.license         = pjson["license"]
  s.author          = { "Tomoiaga Ghita" => "ghita@luminos.software" }
  s.platform        = :ios, "7.0"
  s.source          = { :git => "https://github.com/luminos-software/react-native-play-sound", :tag => "#{s.version}" }
  s.source_files    = 'PlaySound/*.{h,m}'

  s.dependency 'React'

end