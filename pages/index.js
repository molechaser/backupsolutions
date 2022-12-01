import Head from 'next/head';

import {
	LifebuoyIcon,
	NewspaperIcon,
	PhoneIcon,
} from '@heroicons/react/24/outline';

const supportLinks = [
	{
		name: 'Sales',
		href: 'https://forms.zohopublic.com/remotedatabackupsinc/form/Connected/formperma/iVBbPlNtU7yBt2-1d9Tje5I1s0GPHbm42sjqbij4UMI',
		description:
			'Online computer backups and recovery services for PC and Mac at affordable prices and 365/24/7 US based support team. If you need server backup please call Remote Data Backups at 866-722-2587 to discuss your needs.  For PC or Mac click below to get started now.',
		icon: PhoneIcon,
		linktext: 'Sign Up for PC/Mac Backup',
	},
	{
		name: 'Technical Support',
		href: 'https://supportticket.remotedatabackups.com/remotedatabackupsinc/form/Support/formperma/F3mB95M5_H94hJ9h25b16_k9E',
		description:
			'Do you need help with your backup or recovery? Call us or start a support case! Remote Data Backups is here to help with any issues you may have, free of charge. Phone support is provided 24/7 at 866-722-2587. Allow up to one business day for email support.',
		icon: LifebuoyIcon,
		linktext: 'Open Support Ticket',
	},
	{
		name: 'Other Inquiries',
		href: 'tel:877-738-0209"',
		description:
			'If you need to contact BackUp Solutions, Inc. for any other reason other than computer backups, please call us at 877-738-0209',
		icon: NewspaperIcon,
		linktext: 'Call Us',
	},
];

export default function Home() {
	return (
		<div>
			<Head>
				<title>BackUp Solutions, Inc.</title>
				<meta name="description" content="BackUp Solutions Website" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="bg-white min-h-screen flex flex-col justify-between">
				<div>
					{/* Header */}

					<div className="relative bg-gray-800 pb-32">
						<div className="absolute inset-0">
							<img
								className="h-full w-full object-cover"
								src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&&sat=-100"
								alt=""
							/>
							<div
								className="absolute inset-0 bg-gray-800 mix-blend-multiply"
								aria-hidden="true"
							/>
						</div>
						<div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
							<h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
								BackUp Solutions, Inc.
							</h1>
							<h2
								className=" mt-8
							text-lg
							font-semibold
							tracking-tight
							text-white
							md:text-xl
							lg:text-2xl"
							>
								Important Notice for our Customers
							</h2>
							<p className="mt-2 max-w-3xl text-xl text-gray-300">
								All BackUp Solutions customers are now handled by Remote Data
								Backups. If you have any questions regarding your account or
								need assistance, please contact them directly using the options
								below.
							</p>
						</div>
					</div>

					{/* Overlapping cards */}
					<section
						className="relative z-10 mx-auto -mt-32 max-w-7xl px-4 pb-32 sm:px-6 lg:px-8"
						aria-labelledby="contact-heading"
					>
						<h2 className="sr-only" id="contact-heading">
							Contact us
						</h2>
						<div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
							{supportLinks.map((link) => (
								<div
									key={link.name}
									className="flex flex-col rounded-2xl bg-white shadow-xl"
								>
									<div className="relative flex-1 px-6 pt-16 pb-8 md:px-8">
										<div className="absolute top-0 inline-block -translate-y-1/2 transform rounded-xl bg-indigo-600 p-5 shadow-lg">
											<link.icon
												className="h-6 w-6 text-white"
												aria-hidden="true"
											/>
										</div>
										<h3 className="text-xl font-medium text-gray-900">
											{link.name}
										</h3>
										<p className="mt-4 text-base text-gray-500">
											{link.description}
										</p>
									</div>
									<div className="rounded-bl-2xl rounded-br-2xl bg-gray-50 p-6 md:px-8">
										<a
											href={link.href}
											className="text-base font-medium text-indigo-700 hover:text-indigo-600"
										>
											{link.linktext}
											<span aria-hidden="true"> &rarr;</span>
										</a>
									</div>
								</div>
							))}
						</div>
					</section>
				</div>

				<footer className="text-center mx-auto text-lg text-white py-4 bg-gray-900 w-full">
					Copyright 2022 BackUp Solutions, Inc.
				</footer>
			</div>
		</div>
	);
}
