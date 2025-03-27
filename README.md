# snk-themes

A fork of Platane/snk that generates a snake game from a github user contributions graph and adds in multiple themes 

for more information see the orignal Platane/snk repo

Fire Theme:
![snake gif](https://github.com/abstract-threadpool/abstract-threadpool/blob/output/fire.svg)

Acid Theme:
![snake gif](https://github.com/abstract-threadpool/abstract-threadpool/blob/output/acid.svg)

Rainbow Theme:
![snake gif](https://github.com/abstract-threadpool/abstract-threadpool/blob/output/rainbow.svg)

Ocean Theme:
![snake gif](https://github.com/abstract-threadpool/abstract-threadpool/blob/output/ocean.svg)

Pull a github user's contribution graph.
Make it a snake Game, generate a snake path where the cells get eaten in an orderly fashion.

## Usage
#TODO add images to make easier to do 


**github action**

In your <username>/<username>/ repo create a new file called <filename>.yaml (deafult is blank.yaml)
copy the below text into the .yaml file, change your the palette under outputs from rainbow to your desired palette. Options show above are [fire, acid, github-dark, github, ocean, rainbow]

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

Place the below line of code in you <username>/<username>/README.md file (support for github dark mode only right now)

![snake gif](https://github.com/<github-username>>/<github-username>>/blob/output/github-contribution-grid-snake-dark.svg)

## TESTING

once you have the yaml set up and the above code in your repo you will need to run the github action.

In your repo with the above code in github click on the Actions tab, on the left under Actions, All workflows click on generate animation and run. Make sure your action runs correctly (green check mark)

It may take sevearl minutes for the animation to show up/update theme on your profile, you can check the change in the .yaml file by naviagting to this link:
 https://github.com/<github-username>>/<github-username>>/blob/output/github-contribution-grid-snake-dark.svg 
 (replace username with your own). You should see the updated animation after the workflow has finished running. 


