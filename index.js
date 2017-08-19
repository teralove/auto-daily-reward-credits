// vers 1.0.0

module.exports = function AutoDailyRewardCredits(dispatch) {
	dispatch.hook('S_LOGIN', 1, (event) => {
        dispatch.toServer('C_REQUEST_RECV_DAILY_TOKEN', 1);
    })
}