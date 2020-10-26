class PostsController < ApplicationController
  before_action :set_post, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  # GET /posts
  def index
    @posts = Post.all.order(created_at: :desc)

    render json: @posts, :include => [:user, :comments, :hashtags], status: :ok
  end

  # gets all posts of one user
  def posts_of_user
    @user = User.find(params[:id])
    @posts = Post.where(user_id: @user.id)

    render json: @posts, include: :user, status: :ok
  end

  # GET /posts/1
  def show
    render json: @post, :include => [:user, :comments, :hashtags], status: :ok
  end
  # :include => [:user :comments, :hashtags],include: :user :comments :hashtags,
  # POST /posts
  def create
    @post = Post.new(post_params)
    @post.user = @current_user

    if @post.save
      render json: @post, status: :created, location: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      render json: @post
    else
      render json: @post.errors, status: :unprocessable_entity
    end
  end

  # DELETE /posts/1
  def destroy
    @post.destroy
  end

  # # all posts by user
  # def posts
  #   @user = User.find(params[:id])
  #   @posts = @user.posts
  # end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_post
      @post = Post.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def post_params
      params.require(:post).permit(:img_url, :content)
    end
end
