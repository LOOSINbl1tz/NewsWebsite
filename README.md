# NewsWebsite
Basic news webapp

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
