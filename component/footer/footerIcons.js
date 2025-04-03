import * as React from "react";
import Svg, { Defs, Image, G, Use } from "react-native-svg";

export function LearnBoard(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 73 65"
      width={73}
      height={65}
    >
      <Defs>
        <Image
          width={54}
          height={48}
          id="img1"
          href="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4zLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDEwMCAxMjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMjU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxyZWN0IHg9IjIzLjEiIHk9IjUyLjkiIHdpZHRoPSIxNiIgaGVpZ2h0PSIyMSIvPg0KCTxyZWN0IHg9IjQyIiB5PSIyNi4xIiB3aWR0aD0iMTYiIGhlaWdodD0iNDcuOSIvPg0KCTxyZWN0IHg9IjYwLjkiIHk9IjQwLjgiIHdpZHRoPSIxNiIgaGVpZ2h0PSIzMy4xIi8+DQo8L2c+DQo8L3N2Zz4NCg=="
        />
      </Defs>
      <G id="Grupo 1">
        <Use
          id="noun_leaderboard_714870"
          href="#img1"
          transform="matrix(1.344,0,0,1.343,-1,-1)"
        />
      </G>
    </Svg>
  );
}

export function Person(props) {
  return (
    <Svg
      viewBox="0 0 69 69"
      width={69}
      height={69}
      {...props}
      style={{ backgroundColor: "red" }}
    >
      <Defs>
        <Image
          width={47}
          height={48}
          id="img1"
          href="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDY0IDgwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2NCA4MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTU1LjEsNTUuMkg5Yy0wLjgtNi41LDAuMy0xMC4zLDIuOS0xMi40YzEuNy0xLjIsMy43LTIsNS44LTJjMS43LTAuMSwzLjQtMC40LDUtMC44YzIuNy0wLjgsMy44LTIuNiwzLjYtNy4zDQoJCWMtMi41LTIuMy00LTUuNS00LjMtOC44Yy0wLjQtNC4zLTEuMS0xNS4xLDEwLjItMTUuMXMxMC41LDEwLjgsMTAuMiwxNS4xYy0wLjMsMy40LTEuOCw2LjUtNC4zLDguOGMtMC40LDcsMi4yLDcuNSw4LjYsOC4xDQoJCUM1My4xLDQxLjQsNTYsNDUuOCw1NS4xLDU1LjJ6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="
        />
      </Defs>
      <G id="Grupo 1">
        <Use
          id="noun_person_3324299"
          href="#img1"
          transform="matrix(1.463 0 0 1.467 -1 -1)"
        />
      </G>
    </Svg>
  );
}

export function Statistic(props) {
  return (
    <Svg viewBox="0 0 92 82" width={92} height={82} {...props}>
      <Defs>
        <Image
          width={90}
          height={80}
          id="img1"
          href="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4zLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIg0KCSBpZD0iQ2FwYV8xIiB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiIHhtbG5zOnNvZGlwb2RpPSJodHRwOi8vc29kaXBvZGkuc291cmNlZm9yZ2UubmV0L0RURC9zb2RpcG9kaS0wLmR0ZCIgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyINCgkgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAxMDAgMTI1Ig0KCSBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMDAgMTI1OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLC05NTIuMzYyMTgpIj4NCgk8cGF0aCBkPSJNNjUuNyw5NjIuNGMtMS43LDAuMS0yLjksMS41LTIuOCwzLjJzMS41LDIuOSwzLjIsMi44aDAuMmwtMTcuOCwxNi4zTDI0LDk5My41Yy0xLjYsMC42LTIuNCwyLjMtMS44LDMuOXMyLjMsMi40LDMuOSwxLjgNCgkJbDI1LTljMC40LTAuMSwwLjctMC40LDEtMC42bDE5LTE3LjR2MS4yYzAsMS43LDEuMywzLDMsM3MzLTEuMywzLTNjMCwwLDAtMC4xLDAtMC4xdi04YzAtMS43LTEuMy0zLTMtM2gtOA0KCQlDNjUuOSw5NjIuNCw2NS44LDk2Mi40LDY1LjcsOTYyLjR6IE02Ni43LDk4My40Yy0xLjUsMC4yLTIuNywxLjUtMi43LDN2NTBoLTR2LTM1YzAtMS43LTEuMy0zLTMtM0g0M2MtMC4xLDAtMC4yLDAtMC4zLDANCgkJYy0xLjUsMC4yLTIuNywxLjUtMi43LDN2MzVoLTR2LTI1YzAtMS43LTEuMy0zLTMtM0gxOWMtMC4xLDAtMC4yLDAtMC4zLDBjLTEuNSwwLjItMi43LDEuNS0yLjcsM3YyNUg4Yy0wLjEsMC0wLjIsMC0wLjMsMA0KCQljLTEuNywwLjEtMi45LDEuNS0yLjgsMy4yczEuNSwyLjksMy4yLDIuOGg4NGMxLjcsMCwzLTEuMywzLTNjMC0xLjctMS4zLTMtMy0zYzAsMC0wLjEsMC0wLjEsMEg3MHYtNDdoOHY0MGMwLDEuNywxLjMsMywzLDMNCgkJYzEuNywwLDMtMS4zLDMtM2MwLDAsMC0wLjEsMC0wLjF2LTQzYzAtMS43LTEuMy0zLTMtM0g2N0M2Ni45LDk4My40LDY2LjgsOTgzLjQsNjYuNyw5ODMuNHogTTQ2LDEwMDQuNGg4djMyaC04VjEwMDQuNHoNCgkJIE0yMiwxMDE0LjRoOHYyMmgtOFYxMDE0LjR6Ii8+DQo8L2c+DQo8L3N2Zz4NCg=="
        />
      </Defs>
      <G id="Grupo 1">
        <Use
          id="noun_statistics_1380671 copia"
          href="#img1"
          transform="matrix(1.019 0 0 1.023 -1 -1)"
        />
      </G>
    </Svg>
  );
}

export function Team(props) {
  return (
    <Svg viewBox="0 0 103 110" width={103} height={110} {...props}>
      <Defs>
        <Image
          width={88}
          height={96}
          id="img1"
          href="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNS4wLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDEwMCAxMjUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEwMCAxMjU7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnIGlkPSJDYXBhXzIiPg0KPC9nPg0KPGcgaWQ9IkNhcGFfMSI+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yNy4xLDI4LjhjLTUuNyw0LjMtMTAuMSwxMC0xMi43LDE2LjZjLTAuNiwxLjUsMC4xLDMuMiwxLjcsMy44YzAuNCwwLjEsMC43LDAuMiwxLjEsMC4yYzEuMiwwLDIuMy0wLjcsMi43LTEuOQ0KCQkJYzIuMi01LjYsNS45LTEwLjQsMTAuNy0xNGMxLjMtMSwxLjYtMi44LDAuNi00LjFDMzAuMywyOC4xLDI4LjQsMjcuOCwyNy4xLDI4Ljh6Ii8+DQoJCTxwYXRoIGQ9Ik02My44LDg4LjVjLTQuMywyLTguOSwzLjEtMTMuOCwzLjFjLTQuOCwwLTkuNC0xLTEzLjgtMy4xYy0xLjUtMC43LTMuMi0wLjEtMy45LDEuNHMtMC4xLDMuMiwxLjQsMy45DQoJCQljNS4xLDIuNCwxMC42LDMuNiwxNi4zLDMuNnMxMS4yLTEuMiwxNi4zLTMuNmMxLjUtMC43LDIuMS0yLjQsMS40LTMuOUM2Nyw4OC41LDY1LjIsODcuOCw2My44LDg4LjV6Ii8+DQoJCTxwYXRoIGQ9Ik02OS40LDMzLjVjNC44LDMuNiw4LjUsOC41LDEwLjcsMTRjMC41LDEuMiwxLjYsMS45LDIuNywxLjljMC40LDAsMC43LTAuMSwxLjEtMC4yYzEuNS0wLjYsMi4zLTIuMywxLjctMy44DQoJCQljLTIuNi02LjYtNy0xMi4zLTEyLjctMTYuNmMtMS4zLTEtMy4xLTAuNy00LjEsMC42QzY3LjgsMzAuNyw2OCwzMi41LDY5LjQsMzMuNXoiLz4NCgkJPHBhdGggZD0iTTYyLjcsMzEuOWMwLTUuOC0yLTEwLjktNi0xMy41Yy0wLjItMC4xLTAuNC0wLjEtMC42LDBjLTEuNywxLjItMy44LDItNi4xLDJzLTQuNC0wLjctNi4xLTJjLTAuMi0wLjEtMC40LTAuMi0wLjYsMA0KCQkJYy00LDIuNi02LDcuNy02LDEzLjVDMzcuMywzNS45LDYyLjcsMzUuOSw2Mi43LDMxLjl6Ii8+DQoJCTxjaXJjbGUgY3g9IjUwIiBjeT0iMTAuMSIgcj0iNy42Ii8+DQoJCTxwYXRoIGQ9Ik0yNS43LDY5LjVjLTAuMi0wLjEtMC40LTAuMS0wLjYsMGMtMS43LDEuMi0zLjgsMi02LjEsMnMtNC40LTAuNy02LjEtMmMtMC4yLTAuMS0wLjQtMC4yLTAuNiwwYy00LDIuNi02LDcuNy02LDEzLjUNCgkJCWMwLDQsMjUuNCw0LDI1LjQsMEMzMS44LDc3LjIsMjkuOCw3Mi4xLDI1LjcsNjkuNXoiLz4NCgkJPGNpcmNsZSBjeD0iMTkiIGN5PSI2MS4yIiByPSI3LjYiLz4NCgkJPHBhdGggZD0iTTg3LjYsNjkuNWMtMC4yLTAuMS0wLjQtMC4xLTAuNiwwYy0xLjcsMS4yLTMuOCwyLTYuMSwyYy0yLjMsMC00LjQtMC43LTYuMS0yYy0wLjItMC4xLTAuNC0wLjItMC42LDANCgkJCWMtNCwyLjYtNiw3LjctNiwxMy41YzAsNCwyNS40LDQsMjUuNCwwQzkzLjcsNzcuMiw5MS43LDcyLjEsODcuNiw2OS41eiIvPg0KCQk8Y2lyY2xlIGN4PSI4MSIgY3k9IjYxLjIiIHI9IjcuNiIvPg0KCTwvZz4NCjwvZz4NCjwvc3ZnPg0K"
        />
      </Defs>
      <G id="Grupo 1">
        <Use
          id="noun_team_1994893"
          href="#img1"
          transform="matrix(1.163 0 0 1.144 -1 -1)"
        />
      </G>
    </Svg>
  );
}
