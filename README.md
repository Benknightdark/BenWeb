# BenWeb Release Note
## Ready To Do
- [x] Add SkillChart Management
- [] Add Experience Management
## 2017/8/25 Done
- [X] add login function
- [x]建立parallax元件
- [x]skill bar chart data json 
- [x]experience data json 
## 2017/8/22 正式上線
# Futrue Work
## Create Admin Module
## Create Blog Module
## PWA


```
{
  "hosting": {
    "public": "dist",
    "rewrites": [
      {
        "source": "/**/!(*.@(js|ts|html|css|json|svg|png|jpg|jpeg))",
        "destination": "/index.html"
      }
    ],
    "headers": [
      {
        "source": "**/*.@(eot|otf|ttf|ttc|woff|font.css)",
        "headers": [
          {
            "key": "Access-Control-Allow-Origin",
            "value": "*"
          }
        ]
      }
    ],
    "ignore": [
      "firebase.json"
    ]
  }
}

```
