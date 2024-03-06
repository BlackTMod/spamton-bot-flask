import google.generativeai as genia
import description as desc
from flask import Flask, render_template, request

app = Flask(__name__)

genia.configure(api_key="AIzaSyDuO26H01C6s2CPPTaoZifwr__3h9eJHcQ")
model = genia.GenerativeModel('gemini-pro')


@app.route("/", methods=['POST', 'GET'])
def home():
    user_input = None
    res_ = "No response yet!"

    if request.method == 'POST':
        user_input = request.form['input-box']
        response = model.generate_content(desc.description + user_input + "Your last response was" + res_ + "And a bit more knowledge for you:" + desc.data)
        res_ = response.text
        face_ = model.generate_content(user_input + desc.face_description)
       
        return render_template("index.html", res=response.text, face=face_.text)
    else:
        return render_template("index.html")




if __name__ == "__main__":
    app.run(debug=False, host=0.0.0.0)





#while True:
    
    #input_ = input("You:")

    #model = genia.GenerativeModel('gemini-pro')
    #response = model.generate_content(desc.description + input_)

    #print(response.text)

