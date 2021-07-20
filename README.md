# For Rent

An interactive app to explore a regression model created to predict housing rent in Brazil

https://renannascimento.github.io/for-rent/

---

Each folder in the root path has its own responsibility in the project

## ds/
Data science analysis using Jupyter and scikit-learn

Dataset can be found on Kaggle [here](https://www.kaggle.com/rubenssjr/brasilian-houses-to-rent)

The final model created is stored in a S3 bucket

To run this folder just do the following

```
$ cd ds/
$ source env/bin/activate
$ jupyter notebook
```

## server/
REST server made with flask that exposes `predict` endpoint

It is hosted in Heroku and gets the model from the S3 bucket

To run, just type

```
$ cd server/
$ source env/bin/activate
$ python app.py
```

## app/
Front-end application made with react that gets data from user and calls a server endpoint to
predict rent value

To run dev environment just run

```
$ cd app/
$ yarn install
$ yarn start
```