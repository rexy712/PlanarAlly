from aiohttp_security import authorized_userid

from . import campaign
from api.socket.constants import DASHBOARD_NS
from app import sio
from state.dashboard import dashboard_state


@sio.on("connect", namespace=DASHBOARD_NS)
async def dashboard_connect(sid: str, environ):
    user = await authorized_userid(environ["aiohttp.request"])
    if user is not None:
        await dashboard_state.add_sid(sid, user)


@sio.on("disconnect", namespace=DASHBOARD_NS)
async def disconnect(sid):
    if not dashboard_state.has_sid(sid):
        return

    await dashboard_state.remove_sid(sid)
