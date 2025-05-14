from typing import Annotated
from fastapi import FastAPI, HTTPException, Depends, Request, Response, APIRouter, Form
from fastapi.templating import Jinja2Templates
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

class PDUCBRoutes:
    router = APIRouter()

    @staticmethod
    def include_static_routes(api_object: FastAPI):
        api_object.mount('/pducb_2025_01/frontend/static', StaticFiles(directory='systems/pducb2025_01/frontend/static'), name='pducb_2025_01-frontend')
    
    @router.get("/pducb",description="PDUCB - Página Inicial",include_in_schema=False)
    async def pducb_initial_route(request: Request):
        return Response(status_code=308, headers={"Location": "/pducb_2025_01/frontend/static/index.html"})

routes_class = PDUCBRoutes