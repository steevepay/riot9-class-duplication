import { RiotMeiosis } from '@riot-tools/meiosis';

const state = {
    loading: false
}

export default new RiotMeiosis(state, { flushOnRead: false, statesToKeep: 1 });