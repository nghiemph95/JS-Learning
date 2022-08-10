git add .

# echo 'Enter the commit message:'


GIT_AUTHOR_DATE=$(date -d'...') GIT_COMMITTER_DATE="$GIT_AUTHOR_DATE" git commit -m GIT_AUTHOR_DATE=$(date -d'...')

# echo 'Enter the git pushing source code:'
# read push


git push

exit
