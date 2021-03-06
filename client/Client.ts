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

import {EventHandler} from "./events/EventHandler";
import {User} from "../commons/api/user/User";
import {Item} from "../commons/api/Item";
import {Character} from "./data/Character";
import {Input} from "./utils/Input";
import {IClientConfig} from "./utils/IClientConfig";

export class Client {

    public static config: IClientConfig;

    public static instance: Client;

    private readonly character: Character;

    public user: User = null;
    public items: Item[] = [];

    constructor() {
        Client.instance = this;

        console.error('---------------- BESX ----------------');
        console.log('Loading everything...');

        Client.config = require('../besx.config.js').client;
        Client.config.commons = require('../besx.config.js').commons;

        this.character = new Character();
        new EventHandler().handle();
        new Input();

        console.log('Loaded!');
        console.error('---------------- BESX ----------------');
    }
}

const client: Client = new Client();