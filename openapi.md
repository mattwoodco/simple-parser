Mastra API
 1.0.0 
OAS 3.1
/openapi.json
Mastra API

agents


GET
/.well-known/{agentId}/agent.json


POST
/a2a/{agentId}


GET
/api/agents


GET
/api/agents/{agentId}


GET
/api/agents/{agentId}/evals/ci


GET
/api/agents/{agentId}/evals/live


POST
/api/agents/{agentId}/generate


POST
/api/agents/{agentId}/stream


POST
/api/agents/{agentId}/streamVNext


GET
/api/agents/{agentId}/speakers


GET
/api/agents/{agentId}/voice/speakers


POST
/api/agents/{agentId}/speak


POST
/api/agents/{agentId}/voice/speak


GET
/api/agents/{agentId}/voice/listener


POST
/api/agents/{agentId}/listen


POST
/api/agents/{agentId}/voice/listen


POST
/api/agents/{agentId}/tools/{toolId}/execute


POST
/api/agents/{agentId}/instructions


POST
/api/agents/{agentId}/instructions/enhance

system


GET
/api

vNextNetworks


GET
/api/networks/v-next


GET
/api/networks/v-next/{networkId}


POST
/api/networks/v-next/{networkId}/generate


POST
/api/networks/v-next/{networkId}/loop


POST
/api/networks/v-next/{networkId}/loop-stream


POST
/api/networks/v-next/{networkId}/stream

networks


GET
/api/networks


GET
/api/networks/{networkId}


POST
/api/networks/{networkId}/generate


POST
/api/networks/{networkId}/stream

mcp


POST
/api/mcp/{serverId}/mcp


GET
/api/mcp/{serverId}/mcp


GET
/api/mcp/{serverId}/sse


POST
/api/mcp/{serverId}/messages


GET
/api/mcp/v0/servers


GET
/api/mcp/v0/servers/{id}


GET
/api/mcp/{serverId}/tools


GET
/api/mcp/{serverId}/tools/{toolId}


POST
/api/mcp/{serverId}/tools/{toolId}/execute

networkMemory


GET
/api/memory/network/status


GET
/api/memory/network/threads


POST
/api/memory/network/threads


GET
/api/memory/network/threads/{threadId}


PATCH
/api/memory/network/threads/{threadId}


DELETE
/api/memory/network/threads/{threadId}


GET
/api/memory/network/threads/{threadId}/messages


POST
/api/memory/network/save-messages


POST
/api/memory/network/messages/delete

memory


GET
/api/memory/status


GET
/api/memory/config


GET
/api/memory/threads


POST
/api/memory/threads


GET
/api/memory/threads/paginated


GET
/api/memory/threads/{threadId}


PATCH
/api/memory/threads/{threadId}


DELETE
/api/memory/threads/{threadId}


GET
/api/memory/threads/{threadId}/messages


GET
/api/memory/threads/{threadId}/messages/paginated


GET
/api/memory/search


GET
/api/memory/threads/{threadId}/working-memory


POST
/api/memory/threads/{threadId}/working-memory


POST
/api/memory/save-messages


POST
/api/memory/messages/delete

telemetry


GET
/api/telemetry


POST
/api/telemetry

legacyWorkflows


GET
/api/workflows/legacy


GET
/api/workflows/legacy/{workflowId}


GET
/api/workflows/legacy/{workflowId}/runs


POST
/api/workflows/legacy/{workflowId}/resume


POST
/api/workflows/legacy/{workflowId}/resume-async


POST
/api/workflows/legacy/{workflowId}/create-run


POST
/api/workflows/legacy/{workflowId}/start-async


POST
/api/workflows/legacy/{workflowId}/start


GET
/api/workflows/legacy/{workflowId}/watch

workflows


GET
/api/workflows

Get all workflows

Parameters
Try it out
No parameters

Responses
Code	Description	Links
200	
List of all workflows

No links

GET
/api/workflows/{workflowId}

Get workflow by ID

Parameters
Try it out
Name	Description
workflowId *
string
(path)
workflowId
Responses
Code	Description	Links
200	
Workflow details

No links
404	
Workflow not found

No links

GET
/api/workflows/{workflowId}/runs

Get all runs for a workflow

Parameters
Try it out
Name	Description
workflowId *
string
(path)
workflowId
fromDate
string($date-time)
(query)
fromDate
toDate
string($date-time)
(query)
toDate
limit
number
(query)
limit
offset
number
(query)
offset
resourceId
string
(query)
resourceId
Responses
Code	Description	Links
200	
List of workflow runs from storage

No links

GET
/api/workflows/{workflowId}/runs/{runId}/execution-result

Get execution result for a workflow run

Parameters
Try it out
Name	Description
workflowId *
string
(path)
workflowId
runId *
string
(path)
runId
Responses
Code	Description	Links
200	
Workflow run execution result

No links
404	
Workflow run execution result not found

No links

GET
/api/workflows/{workflowId}/runs/{runId}

Get workflow run by ID

Parameters
Try it out
Name	Description
workflowId *
string
(path)
workflowId
runId *
string
(path)
runId
Responses
Code	Description	Links
200	
Workflow run by ID

No links
404	
Workflow run not found

No links

POST
/api/workflows/{workflowId}/resume

Resume a suspended workflow step

Parameters
Try it out
Name	Description
workflowId *
string
(path)
workflowId
runId *
string
(query)
runId
Request body

application/json
Example Value
Schema
{
  "step": "string",
  "resumeData": {},
  "runtimeContext": {}
}
Responses
Code	Description	Links

POST
/api/workflows/{workflowId}/resume-async

Resume a suspended workflow step

Parameters
Try it out
Name	Description
workflowId *
string
(path)
workflowId
runId *
string
(query)
runId
Request body

application/json
Example Value
Schema
{
  "step": "string",
  "resumeData": {},
  "runtimeContext": {}
}
Responses
Code	Description	Links

POST
/api/workflows/{workflowId}/stream

Stream workflow in real-time

Parameters
Try it out
Name	Description
workflowId *
string
(path)
workflowId
runId
string
(query)
runId
Request body

application/json
Example Value
Schema
{
  "inputData": {},
  "runtimeContext": {}
}
Responses
Code	Description	Links
200	
workflow run started

No links
404	
workflow not found

No links

POST
/api/workflows/{workflowId}/streamVNext

Stream workflow in real-time using the VNext streaming API

Parameters
Try it out
Name	Description
workflowId *
string
(path)
workflowId
runId
string
(query)
runId
Request body

application/json
Example Value
Schema
{
  "inputData": {},
  "runtimeContext": {}
}
Responses
Code	Description	Links
200	
workflow run started

No links
404	
workflow not found

No links

POST
/api/workflows/{workflowId}/create-run

Create a new workflow run

Parameters
Try it out
Name	Description
workflowId *
string
(path)
workflowId
runId
string
(query)
runId
Responses
Code	Description	Links
200	
New workflow run created

No links

POST
/api/workflows/{workflowId}/start-async

Execute/Start a workflow

Parameters
Try it out
Name	Description
workflowId *
string
(path)
workflowId
runId
string
(query)
runId
Request body

application/json
Example Value
Schema
{
  "inputData": {},
  "runtimeContext": {}
}
Responses
Code	Description	Links
200	
workflow execution result

No links
404	
workflow not found

No links

POST
/api/workflows/{workflowId}/start

Create and start a new workflow run

Parameters
Try it out
Name	Description
workflowId *
string
(path)
workflowId
runId *
string
(query)
runId
Request body

application/json
Example Value
Schema
{
  "inputData": {},
  "runtimeContext": {}
}
Responses
Code	Description	Links
200	
workflow run started

No links
404	
workflow not found

No links

GET
/api/workflows/{workflowId}/watch


POST
/api/workflows/{workflowId}/runs/{runId}/cancel

Cancel a workflow run

Parameters
Try it out
Name	Description
workflowId *
string
(path)
workflowId
runId *
string
(path)
runId
Responses
Code	Description	Links
200	
workflow run cancelled

No links

POST
/api/workflows/{workflowId}/runs/{runId}/send-event

Send an event to a workflow run

Parameters
Try it out
Name	Description
workflowId *
string
(path)
workflowId
runId *
string
(path)
runId
Request body

application/json
Example Value
Schema
{
  "event": "string",
  "data": {}
}
Responses
Code	Description	Links
200	
workflow run event sent

No links
logs


GET
/api/logs


GET
/api/logs/transports


GET
/api/logs/{runId}

scores


GET
/api/scores/scorers


GET
/api/scores/scorers/{scorerId}


GET
/api/scores/run/{runId}


GET
/api/scores/scorer/{scorerId}


GET
/api/scores/entity/{entityType}/{entityId}


POST
/api/scores

tools


GET
/api/tools


GET
/api/tools/{toolId}


POST
/api/tools/{toolId}/execute

vector


POST
/api/vector/{vectorName}/upsert


POST
/api/vector/{vectorName}/create-index


POST
/api/vector/{vectorName}/query


GET
/api/vector/{vectorName}/indexes


GET
/api/vector/{vectorName}/indexes/{indexName}


DELETE
/api/vector/{vectorName}/indexes/{indexName}
