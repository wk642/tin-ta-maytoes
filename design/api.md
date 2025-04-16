# Tin ta maytoes api design

## get threads

```GET /threads```
return a list of threads

## start new thread

``` json
//POST /threads
{
  player_name: string,
}
```

create a new thread and redirect to view thread

## view thread

```GET /thread/{id}```

return thread content and choices from {thread_id}

``` json
{
  question_id: integer,
  question_text: string,
  choices: [
    {
      id: integer,
      text: string,
    },
    {
      id: integer,
      text: string,
    }
  ],
}
```

## make a choice

``` json
//POST /thread/{id}/choice
{
  choice_id: integer,
}
```

add user choice to the unasnwered question and redirect to get thread.
