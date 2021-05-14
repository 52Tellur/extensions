const icon = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c29kaXBvZGk9Imh0dHA6Ly9zb2RpcG9kaS5zb3VyY2Vmb3JnZS5uZXQvRFREL3NvZGlwb2RpLTAuZHRkIgogICB4bWxuczppbmtzY2FwZT0iaHR0cDovL3d3dy5pbmtzY2FwZS5vcmcvbmFtZXNwYWNlcy9pbmtzY2FwZSIKICAgd2lkdGg9IjcwbW0iCiAgIGhlaWdodD0iNzBtbSIKICAgdmlld0JveD0iMCAwIDcwIDcwIgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmc4IgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjAuMiAoZTg2Yzg3MDg3OSwgMjAyMS0wMS0xNSwgY3VzdG9tKSIKICAgc29kaXBvZGk6ZG9jbmFtZT0i44Ki44Kk44Kz44K9LnN2ZyI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJiYXNlIgogICAgIHBhZ2Vjb2xvcj0iI2ZmZmZmZiIKICAgICBib3JkZXJjb2xvcj0iIzY2NjY2NiIKICAgICBib3JkZXJvcGFjaXR5PSIxLjAiCiAgICAgaW5rc2NhcGU6cGFnZW9wYWNpdHk9IjAuMCIKICAgICBpbmtzY2FwZTpwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnpvb209IjEuODYwODEzMSIKICAgICBpbmtzY2FwZTpjeD0iMjg1LjIyOTkyIgogICAgIGlua3NjYXBlOmN5PSI3NS4wNjY4NTEiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICAgIGlua3NjYXBlOmN1cnJlbnQtbGF5ZXI9ImxheWVyMSIKICAgICBpbmtzY2FwZTpkb2N1bWVudC1yb3RhdGlvbj0iMCIKICAgICBzaG93Z3JpZD0iZmFsc2UiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxODQyIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwNTEiCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjY5IgogICAgIGlua3NjYXBlOndpbmRvdy15PSItOSIKICAgICBpbmtzY2FwZTp3aW5kb3ctbWF4aW1pemVkPSIxIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IuODrOOCpOODpOODvCAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSI+CiAgICA8Y2lyY2xlCiAgICAgICBzdHlsZT0iZmlsbDojYWRkNmQ0O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDA3ODE4O3N0cm9rZS13aWR0aDozO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgaWQ9InBhdGg4NDciCiAgICAgICBjeD0iMzUuMDU4MzMxIgogICAgICAgY3k9IjM1LjA1ODMzMSIKICAgICAgIHI9IjMzLjAyOTE2MyIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojNTBiOTY1O3N0cm9rZS13aWR0aDo0LjI4MjQzO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSAzMi45MTM1NzcsMjkuNjczODAzIHYgNy41NTE5MyIKICAgICAgIGlkPSJwYXRoODU3IiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOm5vbmU7c3Ryb2tlOiM1MGI5NjU7c3Ryb2tlLXdpZHRoOjQuMjgyNDM7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDQ3LjcxMjM1NywyNy42MzYyODMgdiA3LjU1MTkzIgogICAgICAgaWQ9InBhdGg4NTctNSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojNTBiOTY1O3N0cm9rZS13aWR0aDozO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSAyOS40ODE5NzcsNDkuMjEzNjkzIGMgOS4zMjg3NCwyLjM1MzAzIDE3LjkzMDc4LDMuMzQzNDcgMjIuNzM0MzYsLTIuNzg4MTgiCiAgICAgICBpZD0icGF0aDg4MyIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0iY2MiIC8+CiAgICA8cGF0aAogICAgICAgaWQ9InBhdGg4ODUiCiAgICAgICBzdHlsZT0iZmlsbDojNTBiOTY1O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDozO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSAyOC42NTMxNDcsNDMuODE0NDYzIGMgMS45NjQ1MiwyLjEzNjAyIDMuNjk3MzMsNS41NzUxIDIuNDc2NzUsNi42OTc2OSAtMS4yMjA1OCwxLjEyMjU5IC00LjkzMjM2LC0wLjQ5NjQzIC02Ljg5Njg4LC0yLjYzMjQ2IC0xLjk2NDUyLC0yLjEzNjAzIC0yLjU2NzYsLTQuNzc3NjUgLTEuMzQ3MDEsLTUuOTAwMjMgMS4yMjA1OSwtMS4xMjI1OCAzLjgwMjYyLC0wLjMwMTAzIDUuNzY3MTQsMS44MzUgeiIKICAgICAgIHNvZGlwb2RpOm5vZGV0eXBlcz0ic3Nzc3MiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6IzUwYjk2NTtzdHJva2Utd2lkdGg6Mi44NzcwNDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gNy45Njg1NTYzLDE4LjUzNjk5MyA2LjA1NDQ3MzcsOC40MTI1NCA1LjYwODM0NywtNy43NzUyMyA2LjUwMDU5LDcuNjQ3NzcgNS42NzIwOSwtNy45MDI2OSA2LjY5MTc4LDcuOTY2NDEgNS45MjcwMiwtOS4wNDk4NCA4Ljg1ODY1LDcuNTIwMjkgMi4xMDMxMywtMTAuMTMzMjcgOC43OTQ5Miw3LjM5MjgzIgogICAgICAgaWQ9InBhdGg4ODgiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzUwYjk2NTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwNzgxODtzdHJva2Utd2lkdGg6MDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Ik0gNTEuNjYyMjgzLDEwNi45NDAzMSBDIDUwLjAwMjU3OSwxMDYuNjE0NjYgNDkuNDU1NDE4LDEwNS45Mjk0OCAzNi43MjU2NSw4OC4yMzU5OTYgMjYuMDU1OTk5LDczLjQwNTkyNiAyNS4xMjg1NzQsNzEuOTM3ODEzIDI1LjEyODU3NCw2OS44Nzc4MzUgYyAwLC0xLjg0MDQ5NSAwLjI5NDMwMywtMi40ODY2NzMgMS42NTM0MzEsLTMuNjMwMzAzIDEuODU4OTEzLC0xLjU2NDE3MiA0LjQ4MTEwMSwtMS44MzIwMDMgNi4xNTM2MzcsLTAuNjI4NTMyIDAuNTgzMDEzLDAuNDE5NTA2IDUuMjkyMDQ0LDYuNjc4NjU2IDEwLjQ2NDUxNCwxMy45MDkyMjEgNS4xNzI0Nyw3LjIzMDU2NiA5LjU1MTUyNywxMy4wNjA5NDIgOS43MzEyMzcsMTIuOTU2MzkxIDAuMTc5NzExLC0wLjEwNDU1MSA0LjIyNTQ4LC01LjYxMjg1NCA4Ljk5MDU5OSwtMTIuMjQwNjcyIDguOTc5ODkxLC0xMi40OTAxNTggMTAuMDkxNDAyLC0xMy41ODIxNjQgMTMuMDgyNDQxLC0xMi44NTI4NjMgMS44NTA2MTEsMC40NTEyMzIgMi40MDMyNjEsMS4wMjUzMyAxMy4yMjU3NTMsMTMuNzM5MDMxIDUuNDgwNTYxLDYuNDM4MjczIDEwLjEyNzM2MywxMS41MTY2OTggMTAuMzI2MjMzLDExLjI4NTM4OSAwLjE5ODg3LC0wLjIzMTMwOSA0LjMwMTc1MSwtNS45MzA5NDMgOS4xMTc1MDEsLTEyLjY2NTg1MyA0LjgxNTc2LC02LjczNDkxIDkuMTkxNDIsLTEyLjQ3ODM2NyA5LjcyMzcxLC0xMi43NjMyMzcgMS43Mzg2MywtMC45MzA0ODYgNC42NTQxLC0wLjU5NzQ2OSA2LjA1MTI4LDAuNjkxMjAyIDAuNzIxMDMsMC42NjUwMzEgNS43MDU4Miw2LjQ2ODk0NiAxMS4wNzczLDEyLjg5NzU4NyA1LjM3MTQ4LDYuNDI4NjQxIDkuOTYyNywxMS42ODg0MzkgMTAuMjAyNywxMS42ODg0MzkgMC4yNCwwIDQuNDkyOTksLTYuMjI3MTE3IDkuNDUxMDgsLTEzLjgzODAzNyA0Ljk1ODA4LC03LjYxMDkyIDkuNDE3NjEsLTE0LjI2ODk3OCA5LjkxMDA1LC0xNC43OTU2ODMgMC40OTI0NCwtMC41MjY3MDYgMS44MDMxLC0xLjEwNDk1NSAyLjkxMjU3LC0xLjI4NDk5OCAyLjQ5NjUsLTAuNDA1MTI1IDEuODcxNjYsLTAuODUyNDIzIDE3Ljk4Mjc3LDEyLjg3MzA5NiA2Ljg5NzM2LDUuODc2MDU2IDEyLjYzOTQ0LDEwLjU4NDk0MiAxMi43NjAxOSwxMC40NjQxOTIgMC4xMjA3NiwtMC4xMjA3NTEgMS42NTA1NCwtNy4wODcwMjggMy4zOTk1NCwtMTUuNDgwNjE2IDIuODkwMzUsLTEzLjg3MTA4IDMuMzA5NCwtMTUuMzcyMzkyIDQuNjAwOSwtMTYuNDgzMjkzIDAuOTQ4MzEsLTAuODE1NzAxIDIuMTEyMTQsLTEuMjIyMjIzIDMuNDk5MSwtMS4yMjIyMjMgMi4xOTg2NSwwIDEuODk0NTgsLTAuMjM4MjUzIDMwLjA2OTM4LDIzLjU2MTI5MSA4LjAwMDUxLDYuNzU4MTA3IDguMDk3NDcsNi44NzAyMTggOC4wOTc0Nyw5LjM2Mjc0OSAwLDIuODQyMzMzIC0yLjMxNDI3LDUuMjMxMzIzIC01LjA2NzY5LDUuMjMxMzIzIC0xLjcxMDQ4LDAgLTMuMjMzMzUsLTEuMDkyODk5IC0xMy42MTA2OCwtOS43Njc4MSAtNi40MjY1OSwtNS4zNzIyOTYgLTEyLjYzNjY0LC0xMC42MTE3MzMgLTEzLjgwMDEzLC0xMS42NDMxOTIgLTEuOTU3NjQsLTEuNzM1NTA5IC0yLjE0NzA1LC0xLjc5ODU5MyAtMi41Mzk1MywtMC44NDU4MjkgLTAuMjMzMjYsMC41NjYyNTMgLTEuNjM4NjQsNi45NTQzODEgLTMuMTIzMDcsMTQuMTk1ODM5IC0xLjQ4NDQyLDcuMjQxNDU4IC0yLjgzMDIyLDEzLjczMTIzMSAtMi45OTA2NiwxNC40MjE3MTggLTAuNTE3MTIsMi4yMjU1MTIgLTIuNjQ5NzIsMy44NDk4NjggLTUuMDU0NDcsMy44NDk4NjggLTIuMzg0NDEsMCAtMC43Njk1OCwxLjIzMzcxIC0yMi4zMjQ5OCwtMTcuMDU2MTU4IC01LjMxNjI4LC00LjUxMDg5MiAtOS44MTQ4NCwtOC4yMDE2MjEgLTkuOTk2ODEsLTguMjAxNjIxIC0wLjE4MTk2LDAgLTQuNzI4MjIsNi43MzYzNzYgLTEwLjEwMjc4LDE0Ljk2OTcyNSAtOS45NzQ2OSwxNS4yODAzMzQgLTEwLjc3MDgzLDE2LjE5OTQ0NCAtMTQuMDMxOTIsMTYuMTk5NDQ0IC0xLjk2NTc2LDAgLTIuNjMyNDUsLTAuNjg3NDYgLTE0LjUxMDM3LC0xNC45NjIzMjUgLTUuMTcyNDcsLTYuMjE2MjcgLTkuNjQ2MzIsLTExLjIzODUwNyAtOS45NDE4OSwtMTEuMTYwNTI1IC0wLjI5NTU3LDAuMDc3OTggLTQuMjQxMzcsNS4zMjI0OTMgLTguNzY4NDQsMTEuNjU0NDY5IC00LjUyNzA3LDYuMzMxOTc2IC04LjcyOSwxMi4wNDQyNjEgLTkuMzM3NjMsMTIuNjkzOTYxIC0xLjM2NzA5LDEuNDU5MzUgLTMuNTY1Njc1LDEuOTg3NDcgLTUuMzg4NjE1LDEuMjk0MzkgQyA5Ni4yNDc3NDEsMTA1Ljk5ODkgOTEuMTEzMTksMTAwLjQ1MTk4IDg1LjMxMTczNyw5My42NDIzMDcgNzkuNjI5NTYsODYuOTcyNjQzIDc0Ljc5MDY0NCw4MS41MTU2NDUgNzQuNTU4NTg2LDgxLjUxNTY0NSBjIC0wLjIzMjA1OCwwIC00LjM2ODg0Niw1LjQ3NjEwNiAtOS4xOTI4NjQsMTIuMTY5MTI1IC02LjczMjgyNiw5LjM0MTM3IC05LjE3NjA2OSwxMi4zMzg0IC0xMC41MTQzOTcsMTIuODk3NTkgLTAuOTU4OTAxLDAuNDAwNjUgLTEuODExNjgyLDAuNjk1NTMgLTEuODk1MDY3LDAuNjU1MjggLTAuMDgzMzksLTAuMDQwMyAtMC42NjU2NzUsLTAuMTc0MDUgLTEuMjkzOTc1LC0wLjI5NzMzIHoiCiAgICAgICBpZD0icGF0aDg5MCIKICAgICAgIHRyYW5zZm9ybT0ic2NhbGUoMC4yNjQ1ODMzMykiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzUwYjk2NTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwNzgxODtzdHJva2Utd2lkdGg6MDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9IiIKICAgICAgIGlkPSJwYXRoODkyIgogICAgICAgdHJhbnNmb3JtPSJzY2FsZSgwLjI2NDU4MzMzKSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojNTBiOTY1O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDA3ODE4O3N0cm9rZS13aWR0aDowO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSAxNzYuOTQzOTMsMTQwLjExNjg5IGMgLTEuNDcwOTQsLTAuNjA4NDEgLTMuMzAzOTksLTIuNjcwMjMgLTMuOTk0NywtNC40OTMyMyAtMC4zNTgxLC0wLjk0NTEzIC0wLjU3MzIsLTcuMzY3OTYgLTAuNTczMiwtMTcuMTE1NTcgMCwtMTcuMTk1NjUgMC4xNTU4LC0xOC4xNDgwMyAzLjMzOTc0LC0yMC40MTUxOSAzLjQ2ODkyLC0yLjQ3MDA4OSA3LjkwNjAyLC0xLjc2NzQwNiAxMC44MzczMywxLjcxNjI1OCBsIDEuNDA3NTEsMS42NzI3MzIgdiAxNi45MTM1NCBjIDAsMTguNjkxNzggLTAuMDc1MywxOS4xNjMxOSAtMy4zODQ4MywyMS4xODExMSAtMS43OTIxNCwxLjA5Mjc0IC01LjYzODA3LDEuMzY1MDQgLTcuNjMxODUsMC41NDAzNSB6IgogICAgICAgaWQ9InBhdGg4OTQiCiAgICAgICB0cmFuc2Zvcm09InNjYWxlKDAuMjY0NTgzMzMpIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiM1MGI5NjU7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDc4MTg7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJtIDEyMC44MjU0NCwxNDcuNTE0OTcgYyAtNC4yNTY5NywtMi4yMjQwOSAtNC4zMzg5NiwtMi42MjE3NSAtNC4zMzg5NiwtMjEuMDQ0OTIgMCwtMTUuMzAyMzcgMC4wNTI5LC0xNi4xNTEzMyAxLjEyNTQ2LC0xOC4wNTk2NyAxLjIyNzk4LC0yLjE4NDg5IDMuMDMwODgsLTMuNDU5NjMgNS42OTk4NywtNC4wMzAwOCAyLjQyMTU0LC0wLjUxNzU2IDYuMjY5NTYsMS4yNzE3OSA3LjY2ODEyLDMuNTY1NzEgMS4wMjk1LDEuNjg4NiAxLjA4NzEyLDIuNjY2MDUgMS4wODcxMiwxOC40NDI0OSAwLDE1LjU2NjgzIC0wLjA2ODcsMTYuNzcyMDEgLTEuMDQ3MTMsMTguMzc2NzMgLTIuMjU3NjYsMy43MDI2OCAtNi4yODkxOSw0Ljc5MDA5IC0xMC4xOTQ0OCwyLjc0OTc0IHoiCiAgICAgICBpZD0icGF0aDg5NiIKICAgICAgIHRyYW5zZm9ybT0ic2NhbGUoMC4yNjQ1ODMzMykiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzAwNzgxODtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwNzgxODtzdHJva2Utd2lkdGg6MDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gMTM5Ljg2MzM2LDE5Ny4yNTY5NiBjIC0zLjI1MTI2LC0wLjQxNDY2IC0xMC4xNDM0MSwtMS42MjkzNCAtMTUuMzE1ODgsLTIuNjk5MjkgLTUuMTcyNDcsLTEuMDY5OTQgLTEwLjY3OTkxLC0yLjE1ODgyIC0xMi4yMzg3NiwtMi40MTk3MyAtNy4yMzQ5OSwtMS4yMTA5MSAtMTQuNjg0MjkxLC01LjM1NzE4IC0yMC4yNzc3NjgsLTExLjI4NjU2IC05LjExODEzMywtOS42NjU3IC0xMC4yOTQ0NTMsLTIxLjQ0MDU0IC0yLjM1NTQ5NiwtMjMuNTc4MjggMi42MjgyLC0wLjcwNzcgNy41NDYyMDcsMC40MTAwMyAxMS4yMTMxOTQsMi41NDg0NSA1LjU5ODQxLDMuMjY0NzQgMTMuMTQ4NzUsMTIuMzE4NDYgMTYuMTM1OTMsMTkuMzQ4ODMgMC42NTUyMiwxLjU0MjA2IDEuNTg4MTMsMi45MjUyOSAyLjA3MzE1LDMuMDczODYgMC40ODUwMiwwLjE0ODU2IDQuNTEyNDMsMC45OTg0MyA4Ljk0OTgxLDEuODg4NTkgMzEuNzMwMjMsNi4zNjUyNSA1MC4xNzc5NywzLjQ3NTY3IDYzLjAyODksLTkuODcyNTggMy42ODA2NCwtMy44MjMwNyA0LjA2Mjg4LC00LjA3MzY5IDYuMjEzMTEsLTQuMDczNjkgMy41OTYyNSwwIDYuMDY2MDYsMi45NjMyMSA1LjM3MDEyLDYuNDQyOTIgLTAuNDE1NzQsMi4wNzg2OCAtNS42MTg0OCw3Ljc0NjY3IC0xMC4yODg5NSwxMS4yMDkwNCAtNi41MzIzOSw0Ljg0MjY2IC0xMy44Njk3NCw3LjgwNzQ2IC0yMy40MjM4Myw5LjQ2NDg3IC01Ljk2NTU3LDEuMDM0ODkgLTIwLjc5MDY1LDEuMDExMjIgLTI5LjA4MzUzLC0wLjA0NjQgeiIKICAgICAgIGlkPSJwYXRoODk4IgogICAgICAgdHJhbnNmb3JtPSJzY2FsZSgwLjI2NDU4MzMzKSIgLz4KICAgIDxwYXRoCiAgICAgICBzdHlsZT0iZmlsbDojMDA3ODE4O2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojMDA3ODE4O3N0cm9rZS13aWR0aDowO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIgogICAgICAgZD0ibSAxNzUuNTY4NTksMTM5LjE3NjgzIGMgLTMuMDY3MjgsLTIuNTgwOTQgLTMuMTkyNjQsLTMuMzkzODkgLTMuMTkxNzIsLTIwLjY5NzcxIDcuM2UtNCwtMTMuOTE5NiAwLjEwOTMsLTE1Ljk0ODkyIDAuOTQwNDQsLTE3LjU3ODg5IDEuMjY5NDIsLTIuNDg5NDg5IDMuMjkyNDcsLTMuODY0MDc2IDYuMTYzMTcsLTQuMTg3NjQ1IDIuODIzMTUsLTAuMzE4MjExIDUuMDAxOTYsMC42MzU3MjYgNy4wNzI2MiwzLjA5NjU3MyBsIDEuNDA3NTEsMS42NzI3MzIgdiAxNi45MTM1NCBjIDAsMTQuMjE4ODUgLTAuMTMyNTgsMTcuMTY5OTMgLTAuODMyMTgsMTguNTIyODEgLTEuOTgzMTUsMy44MzQ5OSAtOC4yMzQ3OCw1LjA1NjQ1IC0xMS41NTk4NCwyLjI1ODU5IHoiCiAgICAgICBpZD0icGF0aDkwMCIKICAgICAgIHRyYW5zZm9ybT0ic2NhbGUoMC4yNjQ1ODMzMykiIC8+CiAgICA8cGF0aAogICAgICAgc3R5bGU9ImZpbGw6IzAwNzgxODtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzAwNzgxODtzdHJva2Utd2lkdGg6MDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIKICAgICAgIGQ9Im0gMTIwLjgyNTQ0LDE0Ny41MTQ5NyBjIC00LjI1NTY5LC0yLjIyMzQzIC00LjMzODk2LC0yLjYyNjUxIC00LjMzODk2LC0yMS4wMDUxNCAwLC0xNC44NjYxIDAuMDc2LC0xNi4xNjYzMyAxLjA1NjgzLC0xOC4wODg5OCAyLjA5MjA5LC00LjEwMDgzIDcuNTg4MzYsLTUuMzY3NTQgMTEuNDI3NjgsLTIuNjMzNzEgMy4wMjI1NiwyLjE1MjI1IDMuMTAwMjYsMi42NzE2NSAzLjA5ODA3LDIwLjcwOTAyIC0wLjAwMiwxNS40NTgxMiAtMC4wNzEyLDE2LjY2NTE5IC0xLjA0OTE0LDE4LjI2OTA3IC0yLjI1NzY2LDMuNzAyNjggLTYuMjg5MTksNC43OTAwOSAtMTAuMTk0NDgsMi43NDk3NCB6IgogICAgICAgaWQ9InBhdGg5MDIiCiAgICAgICB0cmFuc2Zvcm09InNjYWxlKDAuMjY0NTgzMzMpIiAvPgogICAgPHBhdGgKICAgICAgIHN0eWxlPSJmaWxsOiMwMDc4MTg7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiMwMDc4MTg7c3Ryb2tlLXdpZHRoOjA7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiCiAgICAgICBkPSJNIDUxLjE5MjQ0OSwxMDYuODAyNzggQyA0OS42MTQ0MjQsMTA2LjE1NjkxIDQ5LjIyNTQ2NCwxMDUuNjU4ODggMzYuNjU3NjAxLDg4LjE5MjA3MyAyNi4wMDE2NDksNzMuMzgyNDM4IDI1LjEyODU3NCw3MS45OTc1MDYgMjUuMTI4NTc0LDY5LjkwMzkyMSBjIDAsLTEuODY5NjI0IDAuMjg4NjkzLC0yLjUwODAzOSAxLjY1MzQzMSwtMy42NTYzODkgMS43MjgyNjUsLTEuNDU0MjQgNC4xMDAzMDMsLTEuODAxMDcgNS44NjM2NDIsLTAuODU3MzYgMC41NDg2OSwwLjI5MzY1IDQuODkwMjA0LDUuOTE2MTkyIDkuNjQ3ODA4LDEyLjQ5NDUzNyAxMS4xMTEzNzIsMTUuMzYzNzA5IDEwLjYyNTM4OCwxNC43NTIzNjYgMTEuMjE2ODQ4LDE0LjExMDIyNiAwLjI3MjI0MSwtMC4yOTU1NyA0LjI4MDYzNywtNS43ODAxNDEgOC45MDc1NDQsLTEyLjE4NzkzNiA3LjA5MDA4OSwtOS44MTkwNTMgOC43MDQwNDEsLTExLjc0NjczNiAxMC4yNjY3NTUsLTEyLjI2MjQ3OCAxLjQ0NTc2MiwtMC40NzcxNDUgMi4xODAxMywtMC40NTU3MjUgMy4zMzM4NTEsMC4wOTcyNCAwLjgxMzgwOCwwLjM5MDA0OSA0LjcwNDMxMiw0LjQ1NzE4NSA4LjY0NTU2Miw5LjAzODA4IDExLjA2OTY4MiwxMi44NjYyMzggMTMuNTk1OTMzLDE1LjYxOTM4NyAxNC4wNjU3MTYsMTUuMzI5MDQ0IDAuMjM4OTEyLC0wLjE0NzY1NCA0LjM0Njg0OSwtNS43MTIzMDkgOS4xMjg3NTksLTEyLjM2NTg5OSA0Ljc4MTkxLC02LjY1MzU5MSA5LjE0NzIsLTEyLjMzOTc4MyA5LjcwMDY1LC0xMi42MzU5ODIgMC41NTM0NiwtMC4yOTYxOTkgMS45MDA0OSwtMC41Mzg1NDMgMi45OTM0MSwtMC41Mzg1NDMgMi4zOTAwMiwwIDIuMDI5MTEsLTAuMzYwMjkyIDE0LjcwNTcxLDE0LjY4MDcyMyA1LjE1MjAxLDYuMTEyOTQ4IDkuNTA0OTQsMTEuMTExNjM5IDkuNjczMTksMTEuMTA4MjAxIDAuMTY4MjUsLTAuMDAzNCA0LjY1ODg0LC02LjU5MzI5OSA5Ljk3OTEsLTE0LjY0NDEzNiA5LjExMDY1LC0xMy43ODY2MjQgOS43ODk2NywtMTQuNjY2NjYzIDExLjY3NjI2LC0xNS4xMzI3NCAxLjMxNzEzLC0wLjMyNTM5MiAyLjQyMTMzLC0wLjI5ODkzMyAzLjIyNDQsMC4wNzcyNiAwLjY3MTczLDAuMzE0NjY0IDcuMjYyOTgsNS42ODg0NzYgMTQuNjQ3MjQsMTEuOTQxODA1IDcuMzg0MjUsNi4yNTMzMjggMTMuNDk3NzIsMTEuMTU0MjY4IDEzLjU4NTQ4LDEwLjg5MDk3OCAwLjA4NzgsLTAuMjYzMjkgMS41NzY5NCwtNy4yMTc5NjUgMy4zMDkyOCwtMTUuNDU0ODMzIDIuODY0MTEsLTEzLjYxODE3OCAzLjI3OTU1LC0xNS4wODc4MTMgNC41ODE3MSwtMTYuMjA3ODg1IDAuOTYzMjksLTAuODI4NTg3IDIuMTE3NzksLTEuMjMxNzYxIDMuNTI3MTgsLTEuMjMxNzYxIDEuOTUxNTMsMCAzLjE3NDU5LDAuOTA1NzU1IDE3LjgzODU3LDEzLjIxMDU5NCAyMC42ODUzNCwxNy4zNTc0NzkgMjAuMzExMjksMTYuOTk1NDEzIDIwLjMxMTI5LDE5LjY2MDU1MiAwLDIuODcwMjUxIC0yLjI5MTMsNS4yODQyMTcgLTUuMDE1Nyw1LjI4NDIxNyAtMi4xNjUzNiwwIC0yLjA0NzE4LDAuMDg3ODcgLTE4LjM1NDY5LC0xMy42NDczMzkgLTEwLjQ3NTQ1LC04LjgyMzA4IC0xMS4zMDc0NiwtOS40MTIyNzQgLTExLjY3OTk4LC04LjI3MTE2NyAtMC4yMjA2LDAuNjc1NzQ0IC0xLjczNTYxLDcuNjM3MTE1IC0zLjM2NjY4LDE1LjQ2OTcxMiAtMi42MzYyOCwxMi42NTk2NjEgLTMuMTE3OTUsMTQuMzc1MzU4IC00LjMzNzYyLDE1LjQ1MDIzNSAtMC45MjUzNywwLjgxNTUxMyAtMi4wNTg2OSwxLjIwOTE1MyAtMy40ODEzMSwxLjIwOTE1MyAtMi4yNzcyNywwIC0xLjIyMzEsMC44MTA2MiAtMjQuNDA3MjIsLTE4Ljc2ODQ3OSAtNC40NTY0MiwtMy43NjM0NjQgLTguMDYyNzksLTYuNDM5MjE4IC04LjI2NDgxLC02LjEzMjA4NiAtMjEuMjEwNTEsMzIuMjQ2NjE1IC0yMC4xMDU1NywzMC44MTE5NTUgLTIzLjczMDYxLDMwLjgxMTk1NSAtMi4wNzY5NywwIC0yLjYyOTY3LC0wLjU1ODIgLTEzLjk2NDcyLC0xNC4xMDM3NDcgLTUuMzc4MTgsLTYuNDI2OTk4IC05Ljk2NzczLC0xMS44MDI0IC0xMC4xOTkwMSwtMTEuOTQ1MzM5IC0wLjIzMTI4LC0wLjE0MjkzOSAtNC4wMTkxOCw0LjczMjMwMyAtOC40MTc1NiwxMC44MzM4NyAtNC4zOTgzOCw2LjEwMTU2NyAtOC42NzIyMiwxMS44ODMxODYgLTkuNDk3NDIsMTIuODQ4MDM2IC0xLjY4ODczLDEuOTc0NTEgLTMuODI5MDg4LDIuNjYzOTkgLTUuODY1ODkyLDEuODg5NiAtMC43NjAwMTcsLTAuMjg4OTYgLTYuMDE2MTIyLC01LjkzNjUgLTExLjc3NDIyOSwtMTIuNjUxMDgyIC01LjcyMDc0MSwtNi42NzEwMTIgLTEwLjUzNjgzLC0xMi4xMjkxMTMgLTEwLjcwMjQyLC0xMi4xMjkxMTMgLTAuMTY1NTg5LDAgLTQuMjU3MDc5LDUuNDU0MzE4IC05LjA5MjIsMTIuMTIwNzA4IC05LjY3NDkxMywxMy4zMzkyMTcgLTEwLjk1NjI1LDE0LjUyMTY3NyAtMTQuMjY3NDQsMTMuMTY2NDI3IHoiCiAgICAgICBpZD0icGF0aDkwNCIKICAgICAgIHRyYW5zZm9ybT0ic2NhbGUoMC4yNjQ1ODMzMykiIC8+CiAgPC9nPgo8L3N2Zz4K';
class Tellur {
  constructor() {}
  getInfo() {
    return {
	    id: 'Tellur',
	    name: 'Tellur',
	    color3: '#50B965',
	    color1: '#ADD6D4',
	    color2: '#6CB8B8',
	    blockIconURI: icon,
	    menuIconURI: icon,
     blocks: [
       {
         opcode: 'retur',
         blockType: Scratch.BlockType.BOOLEAN,
         text: '[X]を返す', 
         arguments: {
           X: {
             type: "string",
             menu: "retu",
             defaultValue: "true"
           }
         }
       },
       {
         opcode: 'ijyou',
         blockType: Scratch.BlockType.BOOLEAN,
         text: '[X] [Y] [Z]', 
         arguments: {
           X: {
             type: "string",
             defaultValue: "0"
           },
           Y: {
             type: "string",
             menu: "ijyou",
             defaultValue: "<="
           },
           Z: {
             type: "string",
             defaultValue: "50"
           }
         }
       },
       {
         opcode: 'keisan',
         blockType: Scratch.BlockType.BOOLEAN,
         text: '[X] [Y] [Z]', 
         arguments: {
           X: {
             type: "string",
             defaultValue: " "
           },
           Y: {
             type: "string",
             menu: "keisan",
             defaultValue: "+"
           },
           Z: {
             type: "string",
             defaultValue: " "
           }
         }
       },
       {
         opcode: 'same',
         blockType: Scratch.BlockType.BOOLEAN,
         text: '[X]と[N]は全く同じ', 
         arguments: {
           X: {
             type: "string",
             defaultValue: 'ｓ'
           },
           N: {
             type: "string",
             defaultValue: 's'
           }
         }
       },
       {
         opcode: 'andand',
         blockType: Scratch.BlockType.REPORTER,
         text: '[X]と[Y]と[Z]', 
         arguments: {
           X: {
             type: "string",
             defaultValue: 'りんご'
           },
           Y: {
             type: "string",
             defaultValue: 'バナナ'
           },
           Z: {
             type: "string",
             defaultValue: '桃'
           }
         }
       },
       {
         opcode: 'smallbig',
         blockType: Scratch.BlockType.BOOLEAN,
         text: '[X]<[Y]<[Z]', 
         arguments: {
           X: {
             type: "number",
             defaultValue: '0'
           },
           Y: {
             type: "number",
             defaultValue: '25'
           },
           Z: {
             type: "number",
             defaultValue: '50'
           }
         }
       },
       {
         opcode: 'ifelse',
         blockType: Scratch.BlockType.BOOLEAN,
         text: 'もし[X]なら[Y]でなければ[Z]',
         arguments: {
           X: {
             type: Scratch.ArgumentType.BOOLEAN,
             defauleValue: 'true'
           },
           Y: {
             type: "string",
             defaultValue: '0'
           },
           Z: {
             type: "string",
             defaultValue: '50'
           }
         }
       }
     ],
      menus: {
        retu: {
          acceptReporters: true,
          items: ['true', 'false', 'Infinity', 'NaN','Undefined'],
        },
        ijyou: {
          items: ['<=','>=','<','>','≠'],
        },
        keisan: {
          items: ['+','-','*','/','^','%'],
        },
      }
    };
  };
  same({X,N}) {
   return X === N;
  }
  keisan({X,Y,Z}){
    if (Y==="+"){
	    return X + Z;
    } else if(Y==="-"){
	    return X - Z;
    } else if(Y==="*"){
	    return X * Z;
    }else if(Y==="/"){
	    return X / Z;
    }else if(Y==="^"){
	    return X ** Z;
    }else if(Y==="%"){
	    return X % Z;
    }
  }
  andand({X,Y,Z}){
    return X+Y+Z;
  }
  smallbig({X,Y,Z}){
    if(X<Y){
      if(Y<Z){
        return true;
      } else{
        return false;
      }
    } else{
        return false;
    }
  }
  ifelse({X,Y,Z}){
    if(X){
      return Y;
    } else{
      return Z;
    }
  }
  retur({X}){
    return X;
  }
  ijyou({X,Y,Z}){
    if (Y==="<="){
      return X <= Z;
    } else if(Y===">="){
      return X >= Z;
    } else if(Y==="<"){
      return X < Z;
    }else if(Y===">"){
      return X > Z;
    }else if(Y==="≠"){
      return X !== Z;
    }
  }
}
Scratch.extensions.register(new Tellur());
