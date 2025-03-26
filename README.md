# snk-themes

A fork of Platane/snk that generates a snake game from a github user contributions graph and adds in multiple themes 

for more information see the orignal Platane/snk repo

#TODO put in link to original repo
#TODO generate animation for each theme and show below

<picture>
  <source
    media="(prefers-color-scheme: dark)"
    srcset="https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake-dark.svg"
  />
  <source
    media="(prefers-color-scheme: light)"
    srcset="https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake.svg"
  />
  <img
    alt="github contribution grid snake animation"
    src="https://raw.githubusercontent.com/platane/snk/output/github-contribution-grid-snake.svg"
  />
</picture>

Pull a github user's contribution graph.
Make it a snake Game, generate a snake path where the cells get eaten in an orderly fashion.

Generate a [gif](https://github.com/Platane/snk/raw/output/github-contribution-grid-snake.gif) or [svg](https://github.com/Platane/snk/raw/output/github-contribution-grid-snake.svg) image.

Available as github action. It can automatically generate a new image each day. Which makes for great [github profile readme](https://docs.github.com/en/free-pro-team@latest/github/setting-up-and-managing-your-github-profile/managing-your-profile-readme)

## Usage
#TODO add images to make easier to do 

**github action**

```yaml
name: generate animation

on:
  # run automatically every 24 hours
  schedule:
    - cron: "0 */24 * * *" 
  
  # allows to manually run the job at any time
  workflow_dispatch:
  
  # run on every push on the master branch
  push:
    branches:
    - master
    
jobs:
  generate:
    permissions: 
      contents: write
    runs-on: ubuntu-latest
    timeout-minutes: 5
    
    steps:
      # generates a snake game from a github user (<github_user_name>) contributions graph, output a svg animation at <svg_out_path>
      # change the theme you would like from the list in the palette=<theme> section below in outputs
      - name: generate github-contribution-grid-snake.svg
        uses: abstract-threadpool/snk-themes/svg-only@main
        with:
          github_user_name: ${{ github.repository_owner }}
    
          outputs: |
            dist/github-contribution-grid-snake.svg
            dist/github-contribution-grid-snake-dark.svg?palette=rainbow 
            
          
      # push the content of <build_dir> to a branch
      # the content will be available at https://raw.githubusercontent.com/<github_user>/<repository>/<target_branch>/<file> , or as github page
      - name: push github-contribution-grid-snake.svg to the output branch
        uses: crazy-max/ghaction-github-pages@v3.1.0
        with:
          target_branch: output
          build_dir: dist
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

[example with cron job](https://github.com/Platane/Platane/blob/master/.github/workflows/main.yml#L26-L33)

**Using in your README.md**

In the above yaml file under outputs use the link for which snake you want (the one with your selected palette theme) and place it in your read me with the below syntax:

![snake gif](https://github.com/<github-username>>/<github-username>>/blob/output/github-contribution-grid-snake-dark.svg)

## TESTING

once you have the yaml set up and the above code in your repo you will need to run the github action.

In your repo with the above code in github click on the Actions tab, on the left under Actions, All workflows click on generate animation and run. Make sure your action runs correctly (green check mark)

It may take a couple minutes before the change in theme is reflected on your page, you can check your repo under the output branch for the generated animation. 


