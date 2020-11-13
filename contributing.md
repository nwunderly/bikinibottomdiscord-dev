---
title: How To Contribute
description: ""
---

**Note: any questions/concerns about contributing to this site can be brought to `nwunder#5730` in DM on Discord. I'll get back to you ASAP. :\)**

Hey everyone, welcome to the Bikini Bottom website contributing guide! We appreciate your interest in helping us out!
Firstly, I'd like to note that we'll be handling contributions through nwunder's [dev repository](https://github.com/nwunderly/bikinibottomdiscord-dev),
hosted at [dev.bikinibottomdiscord.org](https://dev.bikinibottomdiscord.org) for testing purposes.


#### Let's begin

1. Make a GitHub account [here](https://github.com/join)

2. DM `nwunder#5730` on Discord, letting me know your GitHub username so I can give you access to the dev repository.
Alternatively, [open an issue](https://github.com/nwunderly/bikinibottomdiscord-dev/issues/new) on the dev repository asking to be added as a collaborator.

3. Once I've added you to the repository, you'll be able to contribute to our [jellymon research](https://github.com/nwunderly/bikinibottomdiscord-dev/projects/1)
project board and make edits to the dev repository.


#### The project board

I've made a [jellymon research](https://github.com/nwunderly/bikinibottomdiscord-dev/projects/1) project board for this repository as a way for us to share our notes
in an organized fashion. This will be our central hub for collecting information we'd like to put into the website, and can be edited directly by any collaborators
online. This page is much easier to edit than the actual site, so should be used for quick notes and such.

We'll be beginning the jellymon section of the website by assembling everything we can onto this board.

Some things about the project board:
- Anything you find that you think could be useful to put on the website, feel free to put it on the project board
- If there's already a note that your contribution would be a good fit for, you can edit the note to add it.
- If there's not a note that it would fit into, you can make a new note with this info.
- Please don't delete other people's notes. This is a page where we can all share our ideas, let's be polite.
- I'd love any feedback on the project board. I think it should be useful for planning the jellymon guide, but if it ends up being difficult to use or is leading to issues,
let me know. I'm doing my best to make things run as smoothly as possible.

Our current sections:
- **General notes:** Anything that doesn't seem to fit in the other categories, you're welcome to make a note and put it here. This includes general jellymon tips,
suggestions for changes to the project board itself, thoughts on what we need to work more on, etc.
- **Notes - species:** This is where we'll be taking notes on jellymon species! Information like moves learned, stats, evolutions, and anything else.
We should do our best to have a single "note" card for each evolutionary set. I.e: information about Bulbasaur/Ivysaur/Venusaur would all go together in a single "card"
- **Notes - moves:** Similar to the species column, but this one will contain things we've learned about jellymon moves.
- **Notes - items:** Similar to the species/moves columns, but this one will contain things we've learned about the various items.
- **To do** / **In progress** / **Done** Self explanitory, you probably won't be using these as much. Although if there's anything you think is worth adding,
don't be afraid to create a note.


#### The website repository

This is a GitHub repository, after all. We're all here because we're interested in working on the Bikini Bottom website in one way or another.
I made this fork of the main repository so I'd have a place to give our users access to contribute while keeping things as organized as possible.

Some things about the dev repository:
- GitHub uses branches to organize code. Our important branches are `master` and `gh-pages`.
    - The `master` branch is the one we'll be pulling to the website from. Please only directly edit this branch for edits to `.md` files.
    This is the one most of you will be working with.
    - The `gh-pages` branch is the one that's directly hosted at [dev.bikinibottomdiscord.org](https://dev.bikinibottomdiscord.org).If you've made a big change and would
    like to see how something would look on the website, one way is to pull your change to this branch, and it'll make the change there.
    Please don't directly make changes to this branch, instead edit the `dev` or `master` branch then [pull](https://github.com/nwunderly/bikinibottomdiscord-dev/pulls)
    your changes to this branch to test.
    This branch has a modified CNAME file in order to host the dev site so we're unable to pull from this branch to any other.
    - The `dev` branch is the one you should be using for big changes, like new folders/new files, and especially new html/css/js files, if that's your thing.
- The repository itself is a [GitHub Pages](https://pages.github.com/) site, which means it's a collection of files in a GitHub repository that is used to directly build a
"static" website. This is great for websites like blogs because it's easy to work on, but doesn't let you do things like "log in" to the site.
    - You'll be using folders and markdown files within the repository to create web pages. For example, the file `/jellymon/battling.md` corresponds to
    [bikinibottomdiscord.org/jellymon/battling](https://bikinibottomdiscord.org/jellymon/battling) on the website.
    As such, the `/jellymon/` folder will be the one we're working with the most.
    - Check out this [markdown cheatsheet](https://gist.github.com/lurch/717a99dcdf8963d48056a4dca76b2f33) for helpful information about using markdown for formatting.
- Please be respectful. We're giving our users collaborator access to the dev repository to make contributing as convenient as possible.
Don't delete branches or otherwise "vandalize" this repository. If you're making changes that you shouldn't be, you'll be removed from the repository.


#### A note from Rev

I know learning GitHub can be daunting sometimes, so please, if you need any help learning, don't be afraid to ask me. I'm happy to help!
Additionally, if anyone has questions/concerns/suggestions for the website, the jellymon research project board, or the development github repository,
don't be afraid to send me a DM!

Thanks to everyone who's expressed interest in contributing to our website! I'm so excited to work with you all!

 \- nwunder#5730
