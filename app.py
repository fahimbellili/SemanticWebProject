from flask import Flask, render_template

from SPARQLWrapper import SPARQLWrapper, JSON

app = Flask(__name__)

@app.route("/")
def hello():
    #post=['premier', 'deuxieme']

    sparql = SPARQLWrapper("http://dbpedia.org/sparql")
    sparql.setQuery("""
        PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
        SELECT ?label
        WHERE { <http://dbpedia.org/resource/Asturias> rdfs:label ?label }
    """)

    sparql.setReturnFormat(JSON)
    results = sparql.query().convert()

    return render_template('home.html', post=results)

app.config['ENV'] = 'development'
app.config['DEBUG'] = True
app.config['TESTING'] = True