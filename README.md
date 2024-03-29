# se317project
for a local dev environment, use the vscode devcontainer available in the repo  
  
[setup for devcontainer is available at https://code.visualstudio.com/docs/remote/containers]  
  
from the vscode command palette clone the repo into a container with the following command: 
  
```terminal Remote-containers: Clone Repository in Container Volume...```
  
*make sure to copy the ```.env.devcontainer``` file and rename as ```.env``` to setup the environment variables*  
  
run the project in development with  
  
``` terminal
yarn rw dev
```
  
# Redwood
## Getting Started
- [Tutorial](https://redwoodjs.com/docs/tutorial): getting started and complete overview guide.
- [Docs](https://redwoodjs.com/docs/introduction): using the Redwood Router, handling assets and files, list of command-line tools, and more.
- [Redwood Community](https://community.redwoodjs.com): get help, share tips and tricks, and collaborate on everything about RedwoodJS.

### Setup

We use Yarn as our package manager. To get the dependencies installed, just do this in the root directory:

```terminal
yarn install
```

### Fire it up

```terminal
yarn redwood dev
```

Your browser should open automatically to `http://localhost:8910` to see the web app. Server functions run on `http://localhost:8911` and are also proxied to `http://localhost:8910/.redwood/functions/*`.

