/*
 * Copyright (c) 2020 - cadox8
 *
 * All Rights Reserved
 *
 * That means:
 *
 * - You shall not use any piece of this software in a commercial product / service
 * - You shall not resell this software
 * - You shall not provide any facility to install this particular software in a commercial product / service
 * - If you redistribute this software, you must link to ORIGINAL repository at https://github.com/cadox8/besx
 * - This copyright should appear in every part of the project code
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

import {PlayerConnectingEvent} from "./reciever/PlayerConnectingEvent";
import {PlayerDroppedEvent} from "./reciever/PlayerDroppedEvent";
import {Item} from "../../commons/api/Item";
import {PlayerUseItemEvent} from "./reciever/PlayerUseItemEvent";

export class EventHandler {

    public handle(): void {
        on('playerConnecting', (name: string, setKickReason: any, deferrals: any) => new PlayerConnectingEvent(name, setKickReason, deferrals));
        on('playerDropper', (source: number, reason: string) => new PlayerDroppedEvent(source, reason));

        onNet('besx:useItem', (source: number, item: Item) => new PlayerUseItemEvent(source, item));
    }
}