class ProjectSerializer
  include FastJsonapi::ObjectSerializer
  set_type :project
  attributes :display_name
  set_key_transform :camel_lower
end
