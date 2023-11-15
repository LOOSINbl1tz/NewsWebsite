# NewsWebsite
The News WebApp is a platform providing essential functionalities through various API endpoints. Users can retrieve a list of topics, create new topics, and access news articles both generally and for specific topics. The Natural Language Processing (NLP) component allows users to obtain summarized news, either overall or categorized by topic. The tech stack for this project likely involves web technologies such as HTML for the frontend, and on the backend, a framework like Django or Flask in Python, given the endpoints structure. Additionally, NLP capabilities suggest the use of libraries or APIs like spaCy or NLTK for text processing and summarization. The combination of these technologies enables a user-friendly and efficient news consumption experience.<br>
<h1>API Endpoints</h1>

<table border="1">
        <tr>
            <th>Endpoint</th>
            <th>Description</th>
        </tr>
        <tr>
            <td><code>GET /home/readtopics/</code></td>
            <td>Get a list of topics.</td>
        </tr>
        <tr>
            <td><code>POST /home/createtopics/</code></td>
            <td>Create a new topic.</td>
        </tr>
        <tr>
            <td><code>GET /home/getnews/</code></td>
            <td>Get a list of news articles.</td>
        </tr>
        <tr>
            <td><code>GET /nlp/news/</code></td>
            <td>Get all summerized news.</td>
        </tr>
        <tr>
            <td><code>GET /nlp/category/</code></td>
            <td>Get summerized news by category.</td>
        </tr>
        <tr>
            <td><code>GET /home/readtopics/&lt;topic_id&gt;/news/</code></td>
            <td>Get news articles for a specific topic.</td>
        </tr>
        <tr>
            <td><code>GET /nlp/category/&lt;topic_id&gt;/summarize/</code></td>
            <td>Summarize news articles for a specific category.</td>
        </tr>
    </table>
