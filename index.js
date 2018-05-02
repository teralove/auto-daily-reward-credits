module.exports = function AutoDailyRewardCredits(dispatch) {
    dispatch.hook('S_LOGIN', 'raw', () => {
        dispatch.toServer('C_REQUEST_RECV_DAILY_TOKEN', 1);
    })
}
