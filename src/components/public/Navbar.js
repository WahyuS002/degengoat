import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CustomLink from '../CustomLink'
import HamburgerMenu from './HamburgerMenu'
import { connect } from '../../redux/blockchain/blockchainActions'
import { Truncate as truncate } from '../../utils'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'

export default function Navbar() {
    const dispatch = useDispatch()
    const blockchain = useSelector((state) => state.blockchain)

    return (
        <nav className="px-6 md:px-24 py-2 md:py-8">
            <div className="hidden md:block">
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <div className="w-5 h-5 bg-emerald-500 rounded-full"></div>
                        <div className="ml-2 font-semibold text-xl">DegenGoat</div>
                        <div className="flex space-x-5 ml-12">
                            <CustomLink to="/" className="py-2 px-5 rounded-lg text-sm">
                                Home
                            </CustomLink>
                            <CustomLink to="/faq" className="py-2 px-5 rounded-lg text-sm">
                                FAQ
                            </CustomLink>
                            <CustomLink to="/team" className="py-2 px-5 rounded-lg text-sm">
                                Team
                            </CustomLink>
                            <CustomLink to="/shuffle" className="py-2 px-5 rounded-lg text-sm">
                                Shuffle
                            </CustomLink>
                        </div>
                    </div>
                    {blockchain.walletAddress ? (
                        <Menu as="div" className="relative inline-block text-left">
                            <Menu.Button className="px-5 py-3 text-sm font-semibold rounded-full bg-black border border-gray-400/30 flex items-center hover:bg-semi-black transition duration-300 ease-in-out">
                                <span className="w-2 h-2 rounded-full bg-green-500 mr-2 shadow-[0px_0px_12px] shadow-green-400"></span>
                                <span>{truncate(blockchain.walletAddress, 20)}</span>
                            </Menu.Button>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 w-60 mt-2 origin-top-right bg-semi-black-900 divide-y divide-gray-100 rounded-2xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none px-2 py-1 border border-gray-800">
                                    <div className="px-1 py-1 divide-y divide-gray-800">
                                        <div>
                                            <Menu.Item>
                                                <div className="font-medium text-gray-600 group flex rounded-md items-center w-full px-2 my-3 text-xs">Connected Wallet</div>
                                            </Menu.Item>
                                        </div>
                                        <div>
                                            <Menu.Item>
                                                <a
                                                    href={`https://algoexplorer.io/address/${blockchain.walletAddress}`}
                                                    target={'_blank'}
                                                    className="flex items-center justify-between"
                                                    rel="noreferrer"
                                                >
                                                    <div className="text-gray-300 group flex rounded-md items-center w-full px-2 my-4 text-sm hover:underline">View on Explorer</div>
                                                    <span>
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                                                            <path
                                                                fill-rule="evenodd"
                                                                d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z"
                                                                clip-rule="evenodd"
                                                            />
                                                        </svg>
                                                    </span>
                                                </a>
                                            </Menu.Item>
                                            <Menu.Item>
                                                <Link to="/" className="flex justify-between items-center my-2">
                                                    <div className="group flex rounded-md items-center w-full px-2 text-sm hover:underline text-red-500">Disconnect</div>
                                                    <span>
                                                        <svg width="15" height="16" viewBox="0 0 15 16" xmlns="http://www.w3.org/2000/svg" class="fill-red-500">
                                                            <path
                                                                fill-rule="evenodd"
                                                                clip-rule="evenodd"
                                                                d="M4.50024 0.5C4.77639 0.5 5.00024 0.723858 5.00024 1V3C5.00024 3.27614 4.77639 3.5 4.50024 3.5C4.2241 3.5 4.00024 3.27614 4.00024 3V1C4.00024 0.723858 4.2241 0.5 4.50024 0.5ZM0.646404 1.14648C0.841666 0.951221 1.15825 0.951221 1.35351 1.14648L2.85351 2.64648C3.04877 2.84175 3.04877 3.15833 2.85351 3.35359C2.65825 3.54885 2.34167 3.54885 2.1464 3.35359L0.646404 1.85359C0.451141 1.65833 0.451141 1.34175 0.646404 1.14648ZM0.000244141 5C0.000244141 4.72386 0.224102 4.5 0.500244 4.5H2.50024C2.77639 4.5 3.00024 4.72386 3.00024 5C3.00024 5.27614 2.77639 5.5 2.50024 5.5H0.500244C0.224102 5.5 0.000244141 5.27614 0.000244141 5ZM12.0002 11C12.0002 10.7239 12.2241 10.5 12.5002 10.5H14.5002C14.7764 10.5 15.0002 10.7239 15.0002 11C15.0002 11.2761 14.7764 11.5 14.5002 11.5H12.5002C12.2241 11.5 12.0002 11.2761 12.0002 11ZM10.5002 12.5C10.7764 12.5 11.0002 12.7239 11.0002 13V15C11.0002 15.2761 10.7764 15.5 10.5002 15.5C10.2241 15.5 10.0002 15.2761 10.0002 15V13C10.0002 12.7239 10.2241 12.5 10.5002 12.5ZM12.1464 12.6465C12.3417 12.4512 12.6582 12.4512 12.8535 12.6465L14.3535 14.1465C14.5488 14.3417 14.5488 14.6583 14.3535 14.8536C14.1582 15.0488 13.8417 15.0488 13.6464 14.8536L12.1464 13.3536C11.9511 13.1583 11.9511 12.8417 12.1464 12.6465ZM7.76488 4.19945C8.19188 3.77245 8.35735 3.61015 8.51171 3.50528C9.18807 3.04582 10.0432 3.03682 10.6786 3.45407C10.8228 3.54881 10.9769 3.69918 11.3888 4.11106C11.8007 4.52295 11.9511 4.67702 12.0458 4.82129C12.463 5.45663 12.454 6.31179 11.9946 6.98815C11.8897 7.14252 11.7274 7.30798 11.3004 7.73499L10.6817 8.3537C10.4864 8.54897 10.4864 8.86555 10.6817 9.06081C10.877 9.25607 11.1935 9.25607 11.3888 9.06081L12.0075 8.44209L12.0504 8.39919C12.4201 8.02965 12.6566 7.79318 12.8218 7.55008C13.497 6.5561 13.5319 5.2624 12.8817 4.27235C12.7231 4.0309 12.492 3.79989 12.1406 3.44859L12.0959 3.40396L12.0513 3.35931C11.7 3.00788 11.469 2.77677 11.2275 2.6182C10.2375 1.96801 8.94376 2.00287 7.94978 2.6781C7.70668 2.84324 7.47022 3.07978 7.10068 3.44942L7.10068 3.44943L7.05777 3.49235L6.43905 4.11106C6.24379 4.30633 6.24379 4.62291 6.43905 4.81817C6.63431 5.01343 6.9509 5.01343 7.14616 4.81817L7.76488 4.19945ZM2.99191 7.55821L2.94899 7.60112C2.57934 7.97065 2.3428 8.20712 2.17766 8.45022C1.50243 9.4442 1.46757 10.7379 2.11776 11.7279C2.27633 11.9694 2.50743 12.2004 2.85886 12.5517L2.85888 12.5517L2.90352 12.5963L2.94815 12.641L2.94815 12.641L2.94817 12.641C3.29945 12.9924 3.53046 13.2235 3.77191 13.3821C4.76196 14.0323 6.05566 13.9974 7.04964 13.3222C7.29274 13.1571 7.52921 12.9205 7.89875 12.5509L7.94165 12.508L8.56037 11.8892C8.75563 11.694 8.75563 11.3774 8.56037 11.1821C8.36511 10.9869 8.04853 10.9869 7.85326 11.1821L7.23455 11.8008C6.80754 12.2279 6.64208 12.3902 6.48771 12.495C5.81135 12.9545 4.95619 12.9635 4.32085 12.5462C4.17658 12.4515 4.02251 12.3011 3.61062 11.8892C3.19874 11.4774 3.04837 11.3233 2.95363 11.179C2.53638 10.5437 2.54538 9.68851 3.00484 9.01215C3.10971 8.85778 3.27201 8.69232 3.69901 8.26532L4.31773 7.6466C4.51299 7.45134 4.51299 7.13475 4.31773 6.93949C4.12247 6.74423 3.80589 6.74423 3.61062 6.93949L2.99191 7.55821Z"
                                                            ></path>
                                                        </svg>
                                                    </span>
                                                </Link>
                                            </Menu.Item>
                                        </div>
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    ) : (
                        <div>
                            <button
                                className="px-5 py-3 text-sm font-semibold rounded-full bg-black border border-gray-400/30 flex items-center hover:bg-semi-black transition duration-300 ease-in-out"
                                onClick={(e) => {
                                    e.preventDefault()
                                    dispatch(connect())
                                }}
                            >
                                <span className="w-2 h-2 rounded-full bg-red-500 mr-2 shadow-[0px_0px_12px] shadow-red-400"></span>
                                <span>Connect Wallet</span>
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="flex md:hidden justify-between items-center w-min-full py-4">
                <Link to="/" className="uppercase font-semibold">
                    DegenGoat<span className="ml-[0.09rem] inline-block w-[0.4rem] h-[0.4rem] rounded-full bg-primary"></span>
                </Link>
                <HamburgerMenu />
            </div>
        </nav>
    )
}
