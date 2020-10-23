# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Post.destroy_all
User.destroy_all

@user1 = User.create!(username: 'admin', email: 'admin@email.com', password: '123456')
@user2 = User.create!(username: 'tester', email: 'tester@email.com', password: 'tester123')
puts "#{User.count} users created"

@post1 = Post.create!(img_url: 'http://www.fakeimage.com/fake', content: 'this is fake content for my fake post.', user_id: @user1.id)
@post2 = Post.create!(img_url: 'https://i.redd.it/mlujr8os37u51.jpg', content: 'My minimalistic living space - Chicago, IL', user_id: @user2.id)
puts "#{Post.count} posts created"

@comment1 = Comment.create!(content: 'Wow this is amazing', user_id: @user1.id, post_id: @post2.id)
@comment2 = Comment.create!(content: 'image link is broken duuude', user_id: @user2.id, post_id: @post1.id)
puts "#{Comment.count} comments created"