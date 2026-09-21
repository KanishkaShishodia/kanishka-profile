// Q4. GET, POST, PUT, DELETE routes - To-Do List App (core http module, no database)
const http = require('http');

const PORT = 3000;

// Tasks are stored in a simple array
const tasks = [];
let nextId = 1;

// ---------- Helpers ----------
function sendJSON(res, status, data) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch (err) {
        reject(err);
      }
    });
  });
}

// ---------- Server ----------
const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const parts = url.pathname.split('/').filter(Boolean); // "/tasks/2" -> ["tasks", "2"]

  if (parts[0] !== 'tasks' || parts.length > 2) {
    return sendJSON(res, 404, { error: 'Route not found' });
  }

  const hasId = parts.length === 2;
  const id = hasId ? Number(parts[1]) : null;
  if (hasId && Number.isNaN(id)) {
    return sendJSON(res, 400, { error: 'Task id must be a number' });
  }

  // GET /tasks -> see all tasks
  if (req.method === 'GET' && !hasId) {
    return sendJSON(res, 200, tasks);
  }

  // POST /tasks -> add a new task   (body: {"title": "Buy milk"})
  if (req.method === 'POST' && !hasId) {
    let data;
    try {
      data = await readBody(req);
    } catch {
      return sendJSON(res, 400, { error: 'Invalid JSON body' });
    }
    if (!data.title) {
      return sendJSON(res, 400, { error: 'title is required' });
    }
    const task = { id: nextId++, title: data.title, completed: false };
    tasks.push(task);
    return sendJSON(res, 201, task);
  }

  // PUT /tasks/:id -> mark a task as completed
  if (req.method === 'PUT' && hasId) {
    const task = tasks.find((t) => t.id === id);
    if (!task) return sendJSON(res, 404, { error: 'Task not found' });
    task.completed = true;
    return sendJSON(res, 200, task);
  }

  // DELETE /tasks/:id -> remove a task
  if (req.method === 'DELETE' && hasId) {
    const index = tasks.findIndex((t) => t.id === id);
    if (index === -1) return sendJSON(res, 404, { error: 'Task not found' });
    const [removed] = tasks.splice(index, 1);
    return sendJSON(res, 200, { message: 'Task deleted', task: removed });
  }

  sendJSON(res, 405, { error: 'Method not allowed' });
});

server.listen(PORT, () => {
  console.log(`To-Do server running at http://localhost:${PORT}/tasks`);
});