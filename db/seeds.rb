# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.destroy_all
User.destroy_all

@user = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')

@post = Post.create!(img_url: 'http://www.fakeimage.com/fake', content: 'this is fake content for my fake post.', user_id: 1)
puts "#{Post.count} posts created"