# syntax=docker/dockerfile:1

# For details, see https://github.com/devcontainers/images/tree/main/src/ruby
ARG RUBY_VERSION=3.2
ARG DISTRO_NAME=bullseye
FROM mcr.microsoft.com/devcontainers/ruby:1-$RUBY_VERSION-$DISTRO_NAME

ARG NODE_VERSION="20"
RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION} 2>&1"

# Common dependencies
# Using --mount to speed up build with caching, see https://github.com/moby/buildkit/blob/master/frontend/dockerfile/docs/reference.md#run---mount
RUN --mount=type=cache,target=/var/cache/apt,sharing=locked \
  --mount=type=cache,target=/var/lib/apt,sharing=locked \
  --mount=type=tmpfs,target=/var/log \
  rm -f /etc/apt/apt.conf.d/docker-clean; \
  echo 'Binary::apt::APT::Keep-Downloaded-Packages "true";' > /etc/apt/apt.conf.d/keep-cache; \
  apt-get update -qq && \
  DEBIAN_FRONTEND=noninteractive apt-get -yq dist-upgrade && \
  DEBIAN_FRONTEND=noninteractive apt-get install -yq --no-install-recommends \
    libicu-dev \
    libidn11-dev \
    ffmpeg \
    imagemagick \
    libpam-dev

# [Optional] Uncomment this line to install global node packages.
RUN su vscode -c "source /usr/local/share/nvm/nvm.sh && corepack enable" 2>&1

RUN corepack prepare yarn@4.1.1 --activate

WORKDIR /app

# Comment these lines if you want to install dependencies within a volume, not an image
COPY Gemfile Gemfile.lock /app/
RUN bundle install --frozen

# Use Bash as the default command
CMD ["/bin/bash"]
