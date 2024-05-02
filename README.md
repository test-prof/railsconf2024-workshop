<h1><picture>
  <source media="(prefers-color-scheme: dark)" srcset="./lib/assets/wordmark.dark.png?raw=true">
  <source media="(prefers-color-scheme: light)" srcset="./lib/assets/wordmark.light.png?raw=true">
  <img alt="Mastodon" src="./lib/assets/wordmark.light.png?raw=true" height="34">
</picture></h1>

> [!IMPORTANT]
> This is a specific version of the original Mastodon codebase for [RailsConf 2024 workshop on tests profiling with TestProf](https://evilmartians.com/events/from-slow-to-go-rails-test-profiling-hands-on-railsconf-2024).

Mastodon is a **free, open-source social network server** based on ActivityPub where users can follow friends and discover new ones...

_See the full project's description [here](https://github.com/mastodon/mastodon)._

## Setting up for test profiling

First, install the following tools:

- [Docker](https://www.docker.com/products/docker-desktop/)
- [Dip](https://github.com/bibendi/dip)

Now, run Dip to provision Docker development enviroment enough to run **unit** tests (we don't need browser tests for this workshop):

```sh
dip provision
```

This command may take some time and should complete with success (you will see the message telling you about it).

Now, verify your setup by running all tests:

```sh
dip rspec
```

Make sure all is green. If not, don't hesitate to reach out (via issues).

Now, when everything is ready, you can open a terminal within a Docker container to start playing with TestProf:

```sh
dip runner
```

## Misc

### Additional profiling tools

We're going to analyze some flamegraphs and profiler reports during the workshop, so it's worth having them installed locally (to not depend on the Internet):

- `gem install profile-viewer`

- `npm install -g speedscope`

### Benchmarking

If you want to measure the effect of every optimization change made (and see the progress), you can use [hyperfine](https://github.com/sharkdp/hyperfine) as follows:

```sh
hyperfine -L commit "readme","debug require false","opt-in coverage","logging" --runs 2 --show-output --cleanup 'git checkout railsconf2024' --export-markdown 'tmp/results.md' "git -c advice.detachedHead=false checkout ':/{commit}' && dip rspec:notty"
```

The command above runs tests 2 times for specified commits (matching commit messages) and produces a markdown table. Feel free to adjust it to your needs!
