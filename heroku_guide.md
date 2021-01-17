# Guide Deploy to Heroku.

## Clone this Source

## Follow the README and first run bot locally. generate credentials.josn and test.

## Now, install [heroku cli](https://devcenter.heroku.com/articles/heroku-cli).

## Login into your heroku account by:
	heroku login

## Now, make a new apps on heroku.

## Then, do these commands:
	heroku git:remote -a <appname>
	heroku stack:set container
	./magic.sh

### Warning: Never push to a public source with this commit included, this file contain your important credentials.

## Now, restart worker dyno by following commands:
	heroku ps:scale worker=0
	
	heroku ps:scale worker=1

## Your bot is successfully running on heroku.
