import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatPage } from './pages/chat/chat-page.component';
import { ContactPage } from './pages/contact/contact-page.component';
import { DatePage } from './pages/date/date-page.component';
import { DonationsPage } from './pages/donations/donations-page.component';
import { FeedbackPage } from './pages/feedback/feedback-page.component';
import { FriendsPage } from './pages/friends/friends-page.component';
import { GroupsPage } from './pages/groups/groups-page.component';
import { HelpPage } from './pages/help/help-page.component';
import { InvestmentsPage } from './pages/investments/investments-page.component';
import { LandingPage } from './pages/landing/landing-page.component';
import { NotFoundPage } from './pages/not-found/not-found-page.component';
import { SearchPage } from './pages/search/search-page.component';
import { SettingsPage } from './pages/settings/settings-page.component';
import { ShopPage } from './pages/shop/shop-page.component';
import { SupportPage } from './pages/support/support-page.component';
import { UserPage } from './pages/user/user-page.component';
import { UserProfilePage } from './pages/user-profile/user-profile-page.component';


const routes: Routes = [
	{ path: 'chat', component: ChatPage },
	{ path: 'contact', component: ContactPage },
	{ path: 'date', component: DatePage },
	{ path: 'donations', component: DonationsPage },
	{ path: 'feedback', component: FeedbackPage },
	{ path: 'friends', component: FriendsPage },
	{ path: 'groups', component: GroupsPage },
	{ path: 'help', component: HelpPage },
	{ path: 'investments', component: InvestmentsPage },
	{ path: '', component: LandingPage },
	{ path: 'search', component: SearchPage },
	{ path: 'settings', component: SettingsPage },
	{ path: 'shop', component: ShopPage },
	{ path: 'support', component: SupportPage },
	{ path: 'user/**', component: UserPage },
	{ path: 'user/**/profile', component: UserProfilePage },
	{ path: '**', component: NotFoundPage },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
	
export class AppRoutingModule {}
export const RoutingComponents = [
	ChatPage,
	ContactPage,
	DatePage,
	DonationsPage,
	FeedbackPage,
	FriendsPage,
	GroupsPage,
	HelpPage,
	InvestmentsPage,
	LandingPage,
	SearchPage,
	SettingsPage,
	ShopPage,
	SupportPage,
	UserPage,
	UserProfilePage,
	NotFoundPage,
];
