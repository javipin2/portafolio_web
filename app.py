from flask import Flask, render_template, request

app=Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/aviso')
def aviso():
    return render_template('aviso.html')

@app.route('/dat', methods=['POST'])
def dat():
    name = request.form['name']
    email = request.form['email']
    
    return render_template('aviso.html', name=name, email=email)




if __name__ == "__main__":
    app.run(port=5055)
    