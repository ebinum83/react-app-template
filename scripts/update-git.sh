#!/usr/bin/env bash

if [ $# -ne 2 ]; then
    echo "Usage: $0 <path-to-local-repo> <remote-repo>"
    exit 1
fi

local_repo="$1"
remote_repo="$2"

if [ ! -d "$local_repo" ]; then
    echo "Error: $local_repo is not a directory"
    exit 1
fi

# Check if git is installed
if ! command -v git >/dev/null 2>&1; then
    echo "Git is not installed. Installing..."
    sudo apt update
    sudo apt install git -y
fi

# Change to the local repository directory
cd "$local_repo"

# Check if the directory is a git repository
if [ -d ".git" ]; then
    echo "The project directory is already a git repository."
else
    echo "The project directory is not a git repository. Running git init..."
    git init
    echo "Git init has been run on your project."
fi

# Add files to the staging area
git add .

# Commit changes with a message
git commit -m "Initial commit"

# Check if there are any changes in the repo
if [ -n "$(git status --porcelain)" ]; then
    echo "There are uncommitted changes in the repo. Commit or stash your changes before updating."
    exit 1
fi

# Add the remote repo if it does not exist
remote_repo_url=$(git remote get-url origin 2>/dev/null)
if [ -z "$remote_repo_url" ]; then
    git remote add origin "$remote_repo"
fi

# Get the name of the current branch
current_branch=$(git symbolic-ref --short HEAD)

# Pull the latest changes from the remote repo
echo "Updating the '$current_branch' branch of the repo located at '$local_repo'..."
git pull origin "$current_branch"

# Check if the update was successful
if [ $? -eq 0 ]; then
    echo "The git repo has been updated successfully."
else
    echo "An error occurred while updating the git repo."
    exit 1
fi

# Push changes to remote repo
git push origin "$current_branch"

echo "Changes pushed to remote repo."
