# Team Tag
#
# Iterate over a list of team members, ordered by the "ordering" and "lastname" values.
#
# Syntax:
#
# {% team %}
#   {{ member.firstname }}
#   {{ member.lastname }}
#   {{ forloop }}
# {% endteam %}
#
# 'member' attributes contain all team member data (e.g., firstname, lastname, photo).

module CTO
  class TeamTag < Liquid::Block
    def initialize(tag_name, text, tokens)
      super
    end

    def render(context)
      team = context.registers[:site].collections["team"].docs
      ordering_values = team.collect { |member| member["ordering"] }.uniq.sort
      grouped_team = ordering_values.collect do |ordering_value|
        team.select { |member| member["ordering"] == ordering_value }
      end
      sorted_team = grouped_team.collect { |group|
        group.sort_by! { |member| member["lastname"] }
      }.flatten
      member_count = sorted_team.count
      result = []
      context.stack do
        sorted_team.each_with_index do |member, index|
          context["member"] = member.data.merge({
            "url" => member.url
          })
          context["forloop"] = {
            "name" => "team",
            "length" => member_count,
            "index" => index + 1,
            "index0" => index,
            "rindex" => member_count - index,
            "rindex0" => member_count - index - 1,
            "first" => index == 0,
            "last" => index == member_count - 1
          }
          result << render_all(@nodelist, context)
        end
      end
      result
    end
  end
end

Liquid::Template.register_tag("team", CTO::TeamTag)
